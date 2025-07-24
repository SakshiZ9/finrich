from flask_sqlalchemy import SQLAlchemy

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