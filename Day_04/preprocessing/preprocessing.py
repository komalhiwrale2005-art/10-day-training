import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load dataset
df = pd.read_csv("dataset/hygiene_data.csv")

# Display first 5 rows
print("First 5 rows:")
print(df.head())

# Display dataset information
print("\nDataset Information:")
print(df.info())

# Check missing values
print("\nMissing Values:")
print(df.isnull().sum())

# Check duplicate rows
print("\nDuplicate Rows:")
print(df.duplicated().sum())

# Statistical summary
print("\nStatistical Summary:")
print(df.describe())

# Check hygiene risk distribution
print("\nHygiene Risk Distribution:")
print(df["hygiene_risk"].value_counts())

# ---------------- EDA ----------------

# 1. Hygiene risk distribution
plt.figure(figsize=(7, 5))
sns.countplot(data=df, x="hygiene_risk")
plt.title("Hygiene Risk Distribution")
plt.xlabel("Hygiene Risk")
plt.ylabel("Number of Records")
plt.show()

# 2. Cleanliness score vs hygiene risk
plt.figure(figsize=(7, 5))
sns.boxplot(data=df, x="hygiene_risk", y="cleanliness_score")
plt.title("Cleanliness Score vs Hygiene Risk")
plt.show()

# 3. Waste level vs hygiene risk
plt.figure(figsize=(7, 5))
sns.boxplot(data=df, x="hygiene_risk", y="waste_level")
plt.title("Waste Level vs Hygiene Risk")
plt.show()

# 4. Hours since cleaning vs hygiene risk
plt.figure(figsize=(7, 5))
sns.boxplot(data=df, x="hygiene_risk", y="hours_since_cleaning")
plt.title("Hours Since Cleaning vs Hygiene Risk")
plt.show()

# 5. Correlation heatmap
plt.figure(figsize=(9, 6))

numeric_columns = df.select_dtypes(include="number")

sns.heatmap(
    numeric_columns.corr(),
    annot=True,
    cmap="coolwarm",
    fmt=".2f"
)

plt.title("Feature Correlation Heatmap")
plt.show()