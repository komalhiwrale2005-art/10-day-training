
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import Pipeline
from sklearn.metrics import accuracy_score


# ==========================================================
# 1. LOAD DATASET
# ==========================================================

df = pd.read_csv("Day_04/dataset/hygiene_data.csv")

print("Dataset loaded successfully.")
print("Total records:", len(df))


# ==========================================================
# 2. FEATURE ENGINEERING
# ==========================================================

# Calculate complaint rate based on complaints and footfall
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

print("\nTraining data:", X_train.shape)
print("Testing data:", X_test.shape)


# ==========================================================
# 5. LOGISTIC REGRESSION
# ==========================================================

logistic_model = Pipeline([
    ("scaler", StandardScaler()),
    ("classifier", LogisticRegression(max_iter=1000))
])

logistic_model.fit(X_train, y_train)

logistic_predictions = logistic_model.predict(X_test)

logistic_accuracy = accuracy_score(
    y_test,
    logistic_predictions
)


# ==========================================================
# 6. RANDOM FOREST
# ==========================================================

random_forest_model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

random_forest_model.fit(X_train, y_train)

random_forest_predictions = random_forest_model.predict(X_test)

random_forest_accuracy = accuracy_score(
    y_test,
    random_forest_predictions
)


# ==========================================================
# 7. MODEL COMPARISON
# ==========================================================

print("\n==========================================")
print("           MODEL COMPARISON")
print("==========================================")

print(
    f"Logistic Regression Accuracy : "
    f"{logistic_accuracy * 100:.2f}%"
)

print(
    f"Random Forest Accuracy       : "
    f"{random_forest_accuracy * 100:.2f}%"
)


# ==========================================================
# 8. SELECT BEST MODEL
# ==========================================================

if random_forest_accuracy >= logistic_accuracy:
    best_model = random_forest_model
    best_predictions = random_forest_predictions
    best_model_name = "Random Forest"
    best_accuracy = random_forest_accuracy
else:
    best_model = logistic_model
    best_predictions = logistic_predictions
    best_model_name = "Logistic Regression"
    best_accuracy = logistic_accuracy


print("\n==========================================")
print("             BEST MODEL")
print("==========================================")

print("Selected Model:", best_model_name)
print(f"Accuracy: {best_accuracy * 100:.2f}%")


# ==========================================================
# 9. DISPLAY PREDICTIONS
# ==========================================================

prediction_results = pd.DataFrame({
    "Actual Risk": y_test.values,
    "Predicted Risk": best_predictions
})

print("\n==========================================")
print("          SAMPLE PREDICTIONS")
print("==========================================")

print(prediction_results.head(10))


# ==========================================================
# 10. FINAL MESSAGE
# ==========================================================

print("\nModel training completed successfully.")
