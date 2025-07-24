from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from models import db, User, Sale
import joblib
import numpy as np

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
    if User.query.filter_by(email=data['email']).first():
        return jsonify({"message": "Email already exists."}), 400
    user = User(
        name=data['name'], email=data['email'],
        business_type=data['business_type'], profit=float(data.get('profit', 0))
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
            "id": user.id, "name": user.name, "business_type": user.business_type,
            "profit": user.profit, "savings": user.savings
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
@app.route('/get_ml_suggestion', methods=['POST'])
def get_ml_suggestion():
    data = request.json
    user_id = data.get('user_id')
    sales = Sale.query.filter_by(user_id=user_id).all()
    num_sales = len(sales)
    profit = data.get('profit', 0)
    expenses = data.get('expenses', 0)
    promotion_spent = float(sales[-1].promotion_spent) if sales else 0
    season = season_map.get(data.get('season', 'regular'), 3)

    features = np.array([[profit, expenses, num_sales, promotion_spent, season]])
    pred_class = model.predict(features)[0]
    suggestion = action_mapping[pred_class]
    return jsonify({"suggestion": suggestion})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', port=5000, debug=True)

