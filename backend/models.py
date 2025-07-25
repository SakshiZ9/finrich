from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    email = db.Column(db.String(120), unique=True)
    age = db.Column(db.Integer)
    occupation = db.Column(db.String(120))
    aadhaar = db.Column(db.String(12), unique=True)
    phone = db.Column(db.String(10), unique=True)
    savings = db.Column(db.Float, default=0)


class Sale(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    amount = db.Column(db.Float)
    promotion_spent = db.Column(db.Float)
    season = db.Column(db.String(32))
    feedback = db.Column(db.String(255))

class Transactions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)  # if multi-user
    type = db.Column(db.String(10), nullable=False)  # 'income' or 'expense'
    category = db.Column(db.String(50), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "type": self.type,
            "category": self.category,
            "amount": self.amount,
            "date": self.date.strftime('%Y-%m-%d')
        }

# app.py

