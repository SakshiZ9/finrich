from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from models import db, User, Sale
import joblib
from openai import AzureOpenAI
import numpy as np

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///crafts.db'

endpoint = "https://sarka-mdhjo9x6-canadaeast.cognitiveservices.azure.com/"
model_name = "gpt-4o-mini"
deployment = "gpt-4o-mini-2"

subscription_key = "API_KEY"
api_version = "2024-12-01-preview"

client = AzureOpenAI(
    api_version=api_version,
    azure_endpoint=endpoint,
    api_key=subscription_key,
)



db.init_app(app)
CORS(app)
print("Starting backend...")
season_map = {'festival': 0, 'off_season': 1, 'holiday': 2, 'regular': 3}

# User Registration/KYC with email check
@app.route('/register', methods=['POST'])
def register():
    data = request.json

    # Check for existing email or Aadhaar or phone if needed
    if User.query.filter_by(email=data['email']).first():
        return jsonify({"message": "Email already exists."}), 400
    if User.query.filter_by(aadhaar=data['aadhaar']).first():
        return jsonify({"message": "Aadhaar already exists."}), 400
    if User.query.filter_by(phone=data['phone']).first():
        return jsonify({"message": "Phone number already exists."}), 400

    user = User(
        name=data['name'],
        email=data['email'],
        age=data.get('age'),
        occupation=data.get('occupation'),
        aadhaar=data.get('aadhaar'),
        phone=data.get('phone'),
    )
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "Registered successfully!"})

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user:
        return jsonify({
            "id": user.id,
            "name": user.name,
            "age": user.age,
            "occupation": user.occupation,
            "aadhaar": user.aadhaar,
            "phone": user.phone,
            "savings": user.savings
        })
    return jsonify({"message": "Invalid credentials"}), 400


# Add Sale + Monitoring
@app.route('/add_sale', methods=['POST'])
def add_sale():
    data = request.json
    sale = Sale(
        user_id=data['user_id'],
        amount=data['amount'],
        promotion_spent=data.get('promotion_spent', 0),
        season=data.get('season', 'regular'),
        feedback=data.get('feedback', '')
    )
    db.session.add(sale)
    db.session.commit()
    return jsonify({"message": "Sale added."})

# Get Sales by user for monitoring
@app.route('/get_sales/<int:user_id>')
def get_sales(user_id):
    sales = Sale.query.filter_by(user_id=user_id).all()
    return jsonify([
        {"amount": s.amount, "Promotion": s.promotion_spent,
         "season": s.season, "feedback": s.feedback}
        for s in sales
    ])

# Savings Management
@app.route('/update_savings', methods=['POST'])
def update_savings():
    data = request.json
    user = User.query.get(data['user_id'])
    user.savings = data['savings']
    db.session.commit()
    return jsonify({"message": "Savings updated."})

# Knowledge Hub
@app.route('/knowledge')
def knowledge():
    return jsonify([
        {"title": "What is Profit?", "content": "Profit = Revenue - Expenses."},
        {"title": "Investments 101", "content": "Invest profits for growth."},
        {"title": "Festival Sales Tips", "content": "Increase inventory for festivals."}
    ])

# Budgeting: AI Recommendation
@app.route('/generate-plan', methods=['POST'])
def generate_plan():
    data = request.get_json() or {}

    user_id = data.get('user_id')
    if not user_id:
        return jsonify({"error": "Missing user_id"}), 400

    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404

    initial_fund = data.get('initial_fund')
    region = data.get('region')
    orders = data.get('orders')
    timeline = data.get('timeline')

    if not all([initial_fund, region, orders, timeline]):
        return jsonify({"error": "Missing required fields: initial_fund, region, orders, timeline"}), 400

    prompt = f"""
    My name is {user.name}, age {user.age}, occupation {user.occupation}, 
    with an initial fund of ₹{initial_fund}, planning {orders} orders over {timeline} months.
    Please generate a budget planner table including:
    - raw material cost
    - machine cost
    - tool cost
    - transport cost
    - labour cost
    - profit margin.
    """
    print(f"Generated prompt: {prompt}")
    try:
        response = client.chat.completions.create(
            messages=[{"role": "user", "content": prompt}],
            max_completion_tokens=800,
            temperature=1.0,
            top_p=1.0,
            frequency_penalty=0.0,
            presence_penalty=0.0,
            model=deployment
        )

        budget_plan = response.choices[0].message.content
    except Exception as e:
        return jsonify({"error": f"OpenAI API error: {str(e)}"}), 500

    return jsonify({'budget_plan': budget_plan})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', port=5000, debug=True)

