import sqlite3
from datetime import datetime, timedelta
import random

# Path to your local SQLite database
db_path = '/Users/prernajagesia/Documents/Projects/handicraft-application/backend/instance/crafts.db'

# Connect to the SQLite database
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Create the transactions table if it doesn't exist
cursor.execute('''
CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    type TEXT NOT NULL,
    category TEXT NOT NULL,
    amount REAL NOT NULL,
    date TEXT NOT NULL
)
''')

# Define categories
income_categories = ['Sales', 'Investment', 'Gift']
expense_categories = ['Supplies', 'Shipping', 'Marketing', 'Utilities']

# Generate dummy data
dummy_data = []
for _ in range(30):
    trans_type = random.choice(['income', 'expense'])
    category = random.choice(income_categories if trans_type == 'income' else expense_categories)
    amount = round(random.uniform(1000, 10000.0), 2)
    date = (datetime.now() - timedelta(days=random.randint(0, 90))).strftime('%Y-%m-%d')
    user_id = random.randint(1, 3)
    dummy_data.append((user_id, trans_type, category, amount, date))

# Insert data
cursor.executemany('''
INSERT INTO transactions (user_id, type, category, amount, date)
VALUES (?, ?, ?, ?, ?)
''', dummy_data)

# Commit and close
conn.commit()
conn.close()

print("✅ Dummy transaction data inserted successfully.")
