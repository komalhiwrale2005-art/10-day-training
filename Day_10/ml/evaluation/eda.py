
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load cleaned dataset
df = pd.read_csv("ml/data/cleaned_hygiene_data.csv")

# Display dataset information
print("Dataset Information:")
print(df.info())

print("\nStatistical Summary:")
print(df.describe())

print("\nHygiene Risk Distribution:")
print(df["hygiene_risk"].value_counts())

# Create visualizations folder if needed
import os
os.makedirs("ml/visualizations", exist_ok=True)

# Graph 1: Hygiene risk distribution
plt.figure(figsize=(7, 5))
sns.countplot(data=df, x="hygiene_risk", hue="hygiene_risk", legend=False)
plt.title("Hygiene Risk Distribution")
plt.xlabel("Hygiene Risk")
plt.ylabel("Number of Facilities")
plt.tight_layout()
plt.savefig("ml/visualizations/hygiene_risk_distribution.png")
plt.close()

# Graph 2: Cleanliness vs hygiene risk
plt.figure(figsize=(7, 5))
sns.boxplot(data=df, x="hygiene_risk", y="cleanliness_score", hue="hygiene_risk", legend=False)
plt.title("Cleanliness Score by Hygiene Risk")
plt.tight_layout()
plt.savefig("ml/visualizations/cleanliness_vs_risk.png")
plt.close()

print("\nEDA completed successfully!")
print("Graphs saved in ml/visualizations/")
