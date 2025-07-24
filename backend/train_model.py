import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib

df = pd.read_csv('business_data.csv')
df['season'] = df['season'].astype('category').cat.codes
df['action'] = df['action'].astype('category')
action_mapping = dict(enumerate(df['action'].cat.categories))

X = df[['profit', 'expenses', 'num_sales', 'promotion_spent', 'season']]
y = df['action'].cat.codes

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
clf = RandomForestClassifier()
clf.fit(X_train, y_train)

joblib.dump(clf, 'recommendation_model.pkl')
joblib.dump(action_mapping, 'action_mapping.pkl')
print(f"Model trained with {X_train.shape[0]} samples.")
print(f"Classes: {list(action_mapping.values())}")
print("Saving model and action mapping files...")


