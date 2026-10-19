
import pandas as pd

# Load the hygiene dataset
df = pd.read_csv("ml/data/hygiene_data.csv")

# Display basic dataset information
print("Original Dataset Shape:", df.shape)
print("\nFirst Five Rows:")
print(df.head())

# Check missing values
print("\nMissing Values:")
print(df.isnull().sum())

# Remove duplicate rows
df = df.drop_duplicates()

# Remove rows with missing values
df = df.dropna()

# Save the cleaned dataset
df.to_csv("ml/data/cleaned_hygiene_data.csv", index=False)

print("\nCleaned Dataset Shape:", df.shape)
print("\nPreprocessing completed successfully!")
print("Cleaned dataset saved.")
