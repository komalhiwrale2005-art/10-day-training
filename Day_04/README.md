# Day 4 – Machine Learning

## Objective

Understand the fundamentals of Machine Learning and build a basic prediction model to predict **facility hygiene risk** using real-world hygiene-related data.

The project follows the complete Machine Learning workflow:

**Dataset → Data Cleaning → EDA → Feature Engineering → Train/Test Split → Model Training → Prediction → Evaluation**

---

## 1. ML Fundamentals

### Artificial Intelligence, Machine Learning and Deep Learning

* **AI:** Enables machines to perform tasks that normally require human intelligence.
* **Machine Learning:** A subset of AI where models learn patterns from data and make predictions.
* **Deep Learning:** A subset of ML that uses neural networks with multiple layers.

### Types of Machine Learning

* **Supervised Learning:** Model learns from labelled data.
* **Unsupervised Learning:** Model identifies patterns in data without labelled output.

### Classification and Regression

* **Classification:** Predicts categories or classes.
* **Regression:** Predicts continuous numerical values.

This project uses **classification** because the target variable `hygiene_risk` contains:

* Low
* Medium
* High

### Features and Labels

**Features:**

* `cleanliness_score`
* `odor_score`
* `waste_level`
* `complaints`
* `footfall`
* `hours_since_cleaning`

**Label / Target:**

* `hygiene_risk`

---

## 2. Machine Learning Concepts

### Overfitting

Overfitting occurs when a model learns the training data too closely and performs poorly on unseen data.

### Underfitting

Underfitting occurs when a model is too simple to learn the important patterns in the data.

### Bias and Variance

* **Bias:** Error caused by a model being too simple.
* **Variance:** Error caused by a model being too sensitive to training data.

### Data Leakage

Data leakage occurs when information from the test data or future information is accidentally used during model training.

### Feature Engineering

A new feature called `complaint_rate` was created:

```text
complaint_rate = complaints / (footfall + 1)
```

The `+1` prevents division by zero.

### Feature Selection

The following features were selected for model training:

```text
cleanliness_score
odor_score
waste_level
complaints
footfall
hours_since_cleaning
complaint_rate
```

---

## 3. Algorithms Used

Two classification algorithms were implemented and compared.

### Logistic Regression

Logistic Regression was used as a baseline classification model.

A `StandardScaler` was used before Logistic Regression to scale the features.

### Random Forest

Random Forest is an ensemble learning algorithm that combines multiple decision trees to improve prediction performance.

The project uses:

```text
n_estimators = 100
random_state = 42
```

---

## 4. Dataset

The dataset contains facility-related information used to determine hygiene risk.

### Input Features

| Feature              | Description                          |
| -------------------- | ------------------------------------ |
| cleanliness_score    | Overall cleanliness score            |
| odor_score           | Odor condition score                 |
| waste_level          | Amount of waste present              |
| complaints           | Number of hygiene complaints         |
| footfall             | Number of people using the facility  |
| hours_since_cleaning | Hours passed since the last cleaning |
| complaint_rate       | Complaints relative to footfall      |

### Target

```text
hygiene_risk
```

Possible classes:

```text
Low
Medium
High
```

---

## 5. Data Preprocessing

The dataset is loaded using Pandas.

Basic preprocessing includes:

1. Loading the CSV dataset.
2. Checking the number of records.
3. Creating the `complaint_rate` feature.
4. Selecting relevant features.
5. Separating features and target.
6. Splitting the data into training and testing sets.

The dataset is divided using:

```text
80% Training Data
20% Testing Data
```

Stratified splitting is used to maintain the distribution of hygiene-risk classes.

---

## 6. Exploratory Data Analysis

EDA is used to understand the dataset before model training.

The analysis focuses on:

* Dataset size
* Feature values
* Target classes
* Missing values
* Duplicate records
* Feature relationships
* Distribution of hygiene-risk categories

EDA helps identify data quality problems and understand which factors may influence hygiene risk.

---

## 7. Model Training

### Logistic Regression Workflow

```text
Input Features
      ↓
StandardScaler
      ↓
Logistic Regression
      ↓
Predicted Hygiene Risk
```

### Random Forest Workflow

```text
Input Features
      ↓
Random Forest
      ↓
Multiple Decision Trees
      ↓
Voting
      ↓
Predicted Hygiene Risk
```

---

## 8. Model Evaluation

The two models are evaluated using:

* Accuracy
* Precision
* Recall
* F1 Score
* Confusion Matrix
* Classification Report

### Accuracy

Measures the percentage of correctly classified predictions.

### Precision

Measures how many predicted positive/class results are actually correct.

### Recall

Measures how many actual class instances are correctly identified.

### F1 Score

F1 Score provides a balance between precision and recall.

### Confusion Matrix

The confusion matrix shows correct and incorrect predictions for:

```text
Low
Medium
High
```

---

## 9. Model Comparison

The performance of Logistic Regression and Random Forest is compared using a DataFrame containing:

```text
Model
Accuracy
Precision
Recall
F1 Score
```

The model with the higher **F1 Score** is selected as the best model.

The evaluation script automatically determines the better-performing model.

---

## 10. Prediction

After training, both models generate predictions on the test dataset.

The predictions are compared with the actual hygiene-risk values to evaluate model performance.

The selected best-performing model is used for the final classification report.

---

## 11. Problems Encountered

Some challenges considered during the project include:

* Different feature scales can affect Logistic Regression.
* The hygiene-risk classes may not always be perfectly balanced.
* Model performance depends on the quality and quantity of the dataset.
* Incorrect or missing data can affect predictions.
* A model may overfit if it becomes too complex.
* Choosing the best model requires comparing multiple evaluation metrics rather than relying only on accuracy.

---

## 12. Possible Improvements

The project can be improved by:

* Increasing the size of the dataset.
* Collecting more real-world hygiene records.
* Performing detailed EDA and visualization.
* Handling missing values more systematically.
* Detecting and treating outliers.
* Applying feature selection techniques.
* Performing hyperparameter tuning.
* Using cross-validation.
* Comparing additional algorithms such as Decision Tree and K-Means where appropriate.
* Saving the trained model for future predictions.
* Creating a user interface for entering facility information and receiving hygiene-risk predictions.

---

## 13. Project Structure

```text
Day_04/
│
├── dataset/
│   └── hygiene_data.csv
│
├── preprocessing/
│   └── preprocessing.py
│
├── models/
│   ├── logistic_regression.py
│   └── random_forest.py
│
├── evaluation/
│   └── evaluation.py
│
├── predictions/
│   └── predictions.csv
│
└── README.md
```

---

## 14. Technologies Used

* Python
* Pandas
* NumPy
* Scikit-learn
* CSV Dataset
* Machine Learning

---

## 15. Learning Outcomes

After completing Day 4, I learned how to:

* Understand basic Machine Learning concepts.
* Differentiate between AI, ML and Deep Learning.
* Understand supervised and unsupervised learning.
* Identify features and labels.
* Perform basic data preprocessing.
* Perform feature engineering.
* Split data into training and testing sets.
* Train classification models.
* Use Logistic Regression.
* Use Random Forest.
* Generate predictions.
* Evaluate models using Accuracy, Precision, Recall and F1 Score.
* Interpret a Confusion Matrix.
* Compare multiple ML algorithms.
* Select a suitable model based on evaluation results.

---

## Conclusion

The Day 4 project demonstrates a complete Machine Learning workflow for predicting **facility hygiene risk**.

Two classification algorithms, **Logistic Regression** and **Random Forest**, were trained and evaluated using the same dataset. Their performance was compared using multiple evaluation metrics, and the model with the better F1 Score was selected as the best model.

This project provided practical experience in **data preparation, feature engineering, model training, prediction and model evaluation**.
