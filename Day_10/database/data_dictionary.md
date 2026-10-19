# Smart Hygiene Risk Prediction System — Data Dictionary

## Dataset

**File:** `ml/data/hygiene_data.csv`

The dataset contains sample facility hygiene measurements used to train and test the machine learning model.

## Fields

| Field | Description | Type |
|---|---|---|
| facility_id | Unique identifier for each sample facility | Integer |
| cleanliness_score | Cleanliness score from 1 to 10 | Integer |
| odor_score | Odor severity score from 1 to 10 | Integer |
| waste_level | Waste level score from 1 to 10 | Integer |
| complaints | Number of hygiene complaints | Integer |
| footfall | Number of people visiting the facility | Integer |
| hours_since_cleaning | Hours since the last cleaning | Integer |
| hygiene_risk | Target label: Low, Medium, or High | Categorical |

## Data Processing

- Duplicate rows are removed during preprocessing.
- Rows with missing values are removed.
- The target label is encoded for machine learning.
- The trained model predicts the hygiene risk category.

## Storage

This project currently uses CSV files for dataset storage. It does not currently use a relational database such as MySQL or PostgreSQL.

## Limitation

The dataset contains sample records created for demonstration. Predictions must not be treated as validated real-world hygiene assessments.