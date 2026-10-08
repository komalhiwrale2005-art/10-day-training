
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import Pipeline
from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    confusion_matrix,
    classification_report
)


# ==========================================================
# 1. LOAD DATASET
# ==========================================================

df = pd.read_csv("Day_04/dataset/hygiene_data.csv")

print("Dataset loaded successfully.")
print("Total records:", len(df))


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


# ==========================================================
# 6. RANDOM FOREST
# ==========================================================

random_forest_model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

random_forest_model.fit(X_train, y_train)

random_forest_predictions = random_forest_model.predict(X_test)


# ==========================================================
# 7. CALCULATE METRICS
# ==========================================================

logistic_accuracy = accuracy_score(
    y_test,
    logistic_predictions
)

logistic_precision = precision_score(
    y_test,
    logistic_predictions,
    average="weighted",
    zero_division=0
)

logistic_recall = recall_score(
    y_test,
    logistic_predictions,
    average="weighted",
    zero_division=0
)

logistic_f1 = f1_score(
    y_test,
    logistic_predictions,
    average="weighted",
    zero_division=0
)


random_forest_accuracy = accuracy_score(
    y_test,
    random_forest_predictions
)

random_forest_precision = precision_score(
    y_test,
    random_forest_predictions,
    average="weighted",
    zero_division=0
)

random_forest_recall = recall_score(
    y_test,
    random_forest_predictions,
    average="weighted",
    zero_division=0
)

random_forest_f1 = f1_score(
    y_test,
    random_forest_predictions,
    average="weighted",
    zero_division=0
)


# ==========================================================
# 8. MODEL COMPARISON
# ==========================================================

comparison = pd.DataFrame({
    "Model": [
        "Logistic Regression",
        "Random Forest"
    ],
    "Accuracy": [
        logistic_accuracy,
        random_forest_accuracy
    ],
    "Precision": [
        logistic_precision,
        random_forest_precision
    ],
    "Recall": [
        logistic_recall,
        random_forest_recall
    ],
    "F1 Score": [
        logistic_f1,
        random_forest_f1
    ]
})


print("\n==========================================")
print("           MODEL COMPARISON")
print("==========================================")

print(
    comparison.to_string(
        index=False,
        formatters={
            "Accuracy": "{:.2%}".format,
            "Precision": "{:.2%}".format,
            "Recall": "{:.2%}".format,
            "F1 Score": "{:.2%}".format
        }
    )
)


# ==========================================================
# 9. LOGISTIC REGRESSION CONFUSION MATRIX
# ==========================================================

logistic_cm = confusion_matrix(
    y_test,
    logistic_predictions,
    labels=["Low", "Medium", "High"]
)

print("\n==========================================")
print("   LOGISTIC REGRESSION CONFUSION MATRIX")
print("==========================================")

print("Labels: Low, Medium, High")
print(logistic_cm)


# ==========================================================
# 10. RANDOM FOREST CONFUSION MATRIX
# ==========================================================

random_forest_cm = confusion_matrix(
    y_test,
    random_forest_predictions,
    labels=["Low", "Medium", "High"]
)

print("\n==========================================")
print("      RANDOM FOREST CONFUSION MATRIX")
print("==========================================")

print("Labels: Low, Medium, High")
print(random_forest_cm)


# ==========================================================
# 11. CLASSIFICATION REPORT - BEST MODEL
# ==========================================================

if random_forest_f1 >= logistic_f1:
    best_model_name = "Random Forest"
    best_predictions = random_forest_predictions
else:
    best_model_name = "Logistic Regression"
    best_predictions = logistic_predictions


print("\n==========================================")
print("          BEST MODEL REPORT")
print("==========================================")

print("Best Model:", best_model_name)

print("\nClassification Report:")

print(
    classification_report(
        y_test,
        best_predictions,
        labels=["Low", "Medium", "High"],
        zero_division=0
    )
)


# ==========================================================
# 12. FINAL RESULT
# ==========================================================

print("==========================================")
print("       MODEL EVALUATION COMPLETED")
print("==========================================")
