import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier


# ==========================================================
# 1. LOAD DATASET
# ==========================================================

df = pd.read_csv("Day_04/dataset/hygiene_data.csv")


# ==========================================================
# 2. FEATURE ENGINEERING
# ==========================================================

df["complaint_rate"] = df["complaints"] / (df["footfall"] + 1)


# ==========================================================
# 3. SELECT FEATURES AND TARGET
# ==========================================================

X = df[
    [
        "cleanliness_score",
        "odor_score",
        "waste_level",
        "complaints",
        "footfall",
        "hours_since_cleaning",
        "complaint_rate"
    ]
]

y = df["hygiene_risk"]


# ==========================================================
# 4. TRAIN-TEST SPLIT
# ==========================================================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.20,
    random_state=42,
    stratify=y
)


# ==========================================================
# 5. TRAIN RANDOM FOREST MODEL
# ==========================================================

model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

model.fit(X_train, y_train)


# ==========================================================
# 6. MAKE PREDICTIONS
# ==========================================================

predictions = model.predict(X_test)


# ==========================================================
# 7. CREATE PREDICTION DATAFRAME
# ==========================================================

prediction_results = X_test.copy()

prediction_results["actual_risk"] = y_test.values
prediction_results["predicted_risk"] = predictions


# ==========================================================
# 8. SAVE PREDICTIONS
# ==========================================================

prediction_results.to_csv(
    "Day_04/predictions/predictions.csv",
    index=False
)


# ==========================================================
# 9. DISPLAY RESULTS
# ==========================================================

print("Predictions generated successfully.")

print("\nFirst 10 predictions:")
print(prediction_results.head(10))

print("\nPrediction file saved at:")
print("Day_04/predictions/predictions.csv")