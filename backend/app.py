from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from models import db, User, Sale
import joblib
import openai
import numpy as np
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///crafts.db'

db.init_app(app)
CORS(app)
print("Starting backend...")
model = joblib.load('recommendation_model.pkl')
print("Loaded recommendation_model.pkl")
action_mapping = joblib.load('action_mapping.pkl')
print("Loaded action_mapping.pkl")
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

with open("responses.json", "r") as f:
    saved_responses = json.load(f)

def find_response(params):
    """
    Find a saved response matching the input params approximately.
    This is a simple exact matching based on keys—you can make it smarter.
    """
    for item in saved_responses:
        prompt_params = item.get("prompt_parameters", {})
        # Simple matching: all keys in prompt_params have to match params exactly
        if all(str(params.get(k)) == str(v) for k, v in prompt_params.items()):
            return item.get("response_table")

    return None

# Budgeting: AI Recommendation
@app.route('/generate-plan', methods=['POST'])
def generate_plan():
    data = request.get_json() or {}

    user_name = data.get('name')              # or get it from DB if needed
    age = data.get('age')
    occupation = data.get('occupation')
    initial_fund = data.get('initial_fund')
    orders = data.get('orders')
    timeline = data.get('timeline')

    required_fields = [user_name, age, occupation, initial_fund, orders, timeline]
    if not all(required_fields):
        return jsonify({"error": "Missing required input fields"}), 400

    params_to_match = {
        "name": user_name,
        "age": age,
        "occupation": occupation,
        "initial_fund": initial_fund,
        "orders": orders,
        "timeline": timeline
    }

    # Try to find matching saved response
    response_table = find_response(params_to_match)

    if not response_table:
        return jsonify({"error": "No saved response found for the given inputs."}), 404

    return jsonify({"budget_plan_table": response_table})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', port=5000, debug=True)

