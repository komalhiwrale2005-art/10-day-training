
import pandas as pd
import pickle

# Load the trained model
with open("ml/models/hygiene_model.pkl", "rb") as file:
    model = pickle.load(file)

# Load the label encoder
with open("ml/models/label_encoder.pkl", "rb") as file:
    encoder = pickle.load(file)

# Load selected feature names
with open("ml/models/selected_features.pkl", "rb") as file:
    selected_features = pickle.load(file)

# Input details for a new facility
facility = pd.DataFrame([{
    "cleanliness_score": 3,
    "odor_score": 8,
    "waste_level": 9,
    "complaints": 7,
    "footfall": 250,
    "hours_since_cleaning": 18
}])

# Keep only the features used by the trained model
facility_selected = facility[selected_features]

# Predict hygiene risk
prediction = model.predict(facility_selected)
risk = encoder.inverse_transform(prediction)[0]

print("Smart Hygiene Risk Prediction")
print("-----------------------------")
print("Selected Features:", selected_features)
print("Cleanliness Score:", facility.iloc[0]["cleanliness_score"])
print("Odor Score:", facility.iloc[0]["odor_score"])
print("Waste Level:", facility.iloc[0]["waste_level"])
print("Complaints:", facility.iloc[0]["complaints"])
print("Footfall:", facility.iloc[0]["footfall"])
print("Hours Since Cleaning:", facility.iloc[0]["hours_since_cleaning"])
print("\nPredicted Hygiene Risk:", risk)
