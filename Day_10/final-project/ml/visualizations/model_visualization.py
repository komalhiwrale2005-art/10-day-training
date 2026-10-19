
import pickle
import pandas as pd
import matplotlib.pyplot as plt

from sklearn.model_selection import train_test_split
from sklearn.metrics import ConfusionMatrixDisplay, confusion_matrix
from sklearn.ensemble import RandomForestClassifier

# Load the cleaned dataset
df = pd.read_csv("ml/data/cleaned_hygiene_data.csv")

# Load the label encoder
with open("ml/models/label_encoder.pkl", "rb") as file:
    encoder = pickle.load(file)

# Load selected features
with open("ml/models/selected_features.pkl", "rb") as file:
    selected_features = pickle.load(file)

# Prepare features and target
X = df[selected_features]
y = encoder.transform(df["hygiene_risk"])

# Use the same train/test split as the training script
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42,
    stratify=y
)

# Train a model on the training split for visualization
model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)
model.fit(X_train, y_train)

# 1. Feature importance graph
importance = pd.Series(
    model.feature_importances_,
    index=selected_features
).sort_values()

plt.figure(figsize=(9, 5))
importance.plot(kind="barh")
plt.title("Selected Feature Importance for Hygiene Risk")
plt.xlabel("Importance")
plt.tight_layout()
plt.savefig("ml/visualizations/feature_importance.png")
plt.close()

# 2. Confusion matrix on held-out test data
y_pred = model.predict(X_test)

cm = confusion_matrix(
    y_test,
    y_pred,
    labels=range(len(encoder.classes_))
)

display = ConfusionMatrixDisplay(
    confusion_matrix=cm,
    display_labels=encoder.classes_
)
display.plot(cmap="Blues", values_format="d")
plt.title("Confusion Matrix - Held-Out Test Data")
plt.tight_layout()
plt.savefig("ml/visualizations/confusion_matrix.png")
plt.close()

print("Visualizations created successfully!")
print("Selected features:", selected_features)
print("Confusion matrix uses held-out test data.")
print("Check the ml/visualizations folder.")
