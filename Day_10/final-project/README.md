# Smart Hygiene Risk Prediction System

## 1. Project Overview
The Smart Hygiene Risk Prediction System is a machine learning project that predicts hygiene risk levels for facilities based on cleanliness, odor, waste level, complaints, footfall, and time since the last cleaning.

The system classifies hygiene risk as Low, Medium, or High and provides a Flask REST API for predictions.

## 2. Problem Statement
Poor hygiene in public facilities can create unhealthy conditions. This project demonstrates how machine learning can help identify potential hygiene risks and support timely cleaning and inspection decisions.

## 3. Features
- Data preprocessing and duplicate/missing-value checks
- Exploratory Data Analysis (EDA)
- Hygiene risk distribution visualization
- Machine learning model training using Random Forest
- Hygiene risk prediction
- Feature importance visualization
- Confusion matrix visualization
- Flask REST API for predictions
- Input validation and error handling

## 4. Technology Stack
- Python
- Pandas and NumPy
- Matplotlib and Seaborn
- Scikit-learn
- Flask
- CSV for dataset storage

## 5. Project Structure

```text
Day_10/
├── backend/
│   ├── app.py
│   └── test_api.py
├── database/
│   └── data_dictionary.md
├── frontend/
├── ml/
│   ├── data/
│   ├── evaluation/
│   ├── models/
│   ├── predictions/
│   ├── preprocessing/
│   └── visualizations/
└── README.md
```

## 6. Machine Learning Workflow
1. Load the hygiene dataset.
2. Inspect and clean the data.
3. Explore the dataset and visualize risk patterns.
4. Prepare the input features and encode the target labels.
5. Train a Random Forest classifier.
6. Evaluate the model using a held-out test set.
7. Save the trained model and label encoder.
8. Predict hygiene risk for new facility data.

## 7. Dataset Description

| Feature | Description |
|---|---|
| facility_id | Unique facility identifier |
| cleanliness_score | Cleanliness score |
| odor_score | Odor severity score |
| waste_level | Waste accumulation score |
| complaints | Number of complaints |
| footfall | Approximate number of visitors |
| hours_since_cleaning | Hours since the last cleaning |
| hygiene_risk | Target class: Low, Medium, or High |

The current dataset contains synthetic sample records for demonstration. Results should not be treated as validated real-world hygiene assessments.

## 8. Installation

Open a terminal in the `Day_10` directory and install the dependencies:

```bash
python -m pip install pandas numpy matplotlib seaborn scikit-learn flask
```

## 9. How to Run

### Step 1: Preprocess the data

```bash
python ml/preprocessing/preprocess.py
```

### Step 2: Perform exploratory data analysis

```bash
python ml/evaluation/eda.py
```

### Step 3: Train the model

```bash
python ml/models/train_model.py
```

### Step 4: Generate predictions

```bash
python ml/predictions/predict.py
```

### Step 5: Generate model visualizations

```bash
python ml/visualizations/model_visualization.py
```

### Step 6: Start the Flask API

```bash
python backend/app.py
```

Open `http://127.0.0.1:5000` in a browser to check the API status message.

## 10. API Documentation

### Health check

- Method: GET
- Endpoint: `/`
- Purpose: Check whether the API is running.

### Predict hygiene risk

- Method: POST
- Endpoint: `/predict`
- Content-Type: `application/json`

Example request:

```json
{
  "cleanliness_score": 3,
  "odor_score": 8,
  "waste_level": 9,
  "complaints": 7,
  "footfall": 250,
  "hours_since_cleaning": 18
}
```

Example response:

```json
{
  "predicted_hygiene_risk": "High",
  "status": "success"
}
```

The prediction shown is an example; actual output depends on the saved model.

## 11. Testing
- Run the preprocessing script and confirm that the cleaned dataset is generated.
- Run the EDA script and confirm that the graphs are generated.
- Train the model and check the evaluation output.
- Run the prediction script.
- Start the API and run `backend/test_api.py`.
- Test missing fields, invalid values, and valid input data.

## 12. Database Design
The current version uses CSV files for storing the dataset and cleaned data. A relational database is not connected. The `database/data_dictionary.md` file documents the dataset fields.

## 13. Challenges and Solutions
- Data preparation: Used a preprocessing script to inspect and clean records.
- Categorical target values: Used a label encoder for model training and prediction.
- Model access through an API: Loaded the saved model in Flask.
- Result interpretation: Generated visualizations to explore the data and model.

## 14. Limitations
- The dataset is synthetic and small.
- Predictions depend on the quality and representativeness of the training data.
- The frontend has not yet been implemented.
- The current system is a demonstration and is not validated for real-world hygiene decisions.
- Model evaluation must use held-out test data to estimate generalization performance.

## 15. Future Improvements
- Build a responsive frontend dashboard.
- Collect and validate real-world hygiene data.
- Perform feature selection and compare multiple algorithms.
- Improve evaluation using cross-validation and suitable metrics.
- Add database integration and prediction history.
- Add authentication and deployment.

## 16. Conclusion
This project demonstrates a basic machine learning workflow for hygiene risk classification, including preprocessing, exploratory analysis, model training, prediction, visualization, and API integration. Further development and real-world validation are needed before practical deployment.
