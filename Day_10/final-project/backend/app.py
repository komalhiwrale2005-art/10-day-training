
from flask import Flask, request, jsonify
import pandas as pd
import pickle
from pathlib import Path

app = Flask(__name__)

# Find the Day_10 project directory
BASE_DIR = Path(__file__).resolve().parent.parent
MODEL_DIR = BASE_DIR / "ml" / "models"

MODEL_PATH = MODEL_DIR / "hygiene_model.pkl"
ENCODER_PATH = MODEL_DIR / "label_encoder.pkl"
FEATURES_PATH = MODEL_DIR / "selected_features.pkl"

# Load the trained model
with open(MODEL_PATH, "rb") as file:
    model = pickle.load(file)

# Load the label encoder
with open(ENCODER_PATH, "rb") as file:
    encoder = pickle.load(file)

# Load the selected feature names
with open(FEATURES_PATH, "rb") as file:
    FEATURES = pickle.load(file)

# All accepted input fields
ALL_FIELDS = [
    "cleanliness_score",
    "odor_score",
    "waste_level",
    "complaints",
    "footfall",
    "hours_since_cleaning"
]


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "Smart Hygiene Risk Prediction API",
        "prediction_endpoint": "/predict",
        "method": "POST"
    })


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return jsonify({
            "error": "Please send a valid JSON object"
        }), 400

    # Require all six input fields for validation
    missing = [field for field in ALL_FIELDS if field not in data]
    if missing:
        return jsonify({
            "error": "Missing required fields",
            "fields": missing
        }), 400

    try:
        values = {
            field: float(data[field])
            for field in ALL_FIELDS
        }
    except (TypeError, ValueError):
        return jsonify({
            "error": "All input fields must be numeric"
        }), 400

    if not all(pd.notna(value) for value in values.values()):
        return jsonify({
            "error": "Input values must be valid numbers"
        }), 400

    # Validate score ranges
    for field in [
        "cleanliness_score",
        "odor_score",
        "waste_level"
    ]:
        if not 1 <= values[field] <= 10:
            return jsonify({
                "error": f"{field} must be between 1 and 10"
            }), 400

    # Validate non-negative values
    for field in [
        "complaints",
        "footfall",
        "hours_since_cleaning"
    ]:
        if values[field] < 0:
            return jsonify({
                "error": f"{field} must not be negative"
            }), 400

    # Use only the selected features for prediction
    facility = pd.DataFrame([values])[FEATURES]

    prediction = model.predict(facility)
    risk = encoder.inverse_transform(prediction)[0]

    return jsonify({
        "predicted_hygiene_risk": str(risk),
        "selected_features": FEATURES,
        "status": "success"
    })


if __name__ == "__main__":
    app.run(debug=True, port=5000)
