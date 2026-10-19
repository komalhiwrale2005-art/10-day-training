
import pandas as pd
import os
import pickle

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# Load cleaned dataset
df = pd.read_csv("ml/data/cleaned_hygiene_data.csv")

# Define input features and target
features = [
    "cleanliness_score",
    "odor_score",
    "waste_level",
    "complaints",
    "footfall",
    "hours_since_cleaning"
]

X = df[features]
y = df["hygiene_risk"]

# Encode target labels
encoder = LabelEncoder()
y_encoded = encoder.fit_transform(y)

# Split data before feature selection to avoid test-data leakage
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y_encoded,
    test_size=0.25,
    random_state=42,
    stratify=y_encoded
)

# Train a temporary model to identify important features
selection_model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)
selection_model.fit(X_train, y_train)

# Select the four most important features using training data only
importance = pd.Series(
    selection_model.feature_importances_,
    index=features
)

selected_features = importance.sort_values(
    ascending=False
).head(4).index.tolist()

print("Selected Features:")
for feature in selected_features:
    print(f"{feature}: {importance[feature]:.4f}")

# Train the final model using selected features
X_train_selected = X_train[selected_features]
X_test_selected = X_test[selected_features]

model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)
model.fit(X_train_selected, y_train)

# Evaluate only on the held-out test data
y_pred = model.predict(X_test_selected)

print("\nModel Evaluation")
print("Accuracy:", round(accuracy_score(y_test, y_pred) * 100, 2), "%")

print("\nClassification Report:")
print(classification_report(
    y_test,
    y_pred,
    labels=range(len(encoder.classes_)),
    target_names=encoder.classes_,
    zero_division=0
))

print("\nConfusion Matrix:")
print(confusion_matrix(y_test, y_pred))

# Save model, encoder, and selected feature names
os.makedirs("ml/models", exist_ok=True)

with open("ml/models/hygiene_model.pkl", "wb") as file:
    pickle.dump(model, file)

with open("ml/models/label_encoder.pkl", "wb") as file:
    pickle.dump(encoder, file)

with open("ml/models/selected_features.pkl", "wb") as file:
    pickle.dump(selected_features, file)

print("\nModel training completed successfully!")
print("Saved model, label encoder, and selected features in ml/models/")
