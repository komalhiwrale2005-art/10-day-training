import pandas as pd
import numpy as np

# File paths
input_file = r"C:\Desktop\10 Day's Training\Day_03\dataset\facility_data.csv"
output_file = r"C:\Desktop\10 Day's Training\Day_03\dataset\cleaned_facility_data.csv"


# 1. LOAD DATASET
print("\n========== LOADING DATA ==========")

df = pd.read_csv(input_file)

print("Dataset loaded successfully!")
print("\nFirst 5 rows:")
print(df.head())

print("\nDataset shape:")
print(df.shape)


# 2. CHECK MISSING VALUES
print("\n========== MISSING VALUES ==========")

print(df.isnull().sum())


# 3. CHECK DUPLICATES
print("\n========== DUPLICATES ==========")

duplicate_count = df.duplicated().sum()

print("Duplicate rows:", duplicate_count)


# 4. CHECK INVALID VALUES
print("\n========== INVALID VALUES ==========")

# Cleanliness score must be between 0 and 10
invalid_cleanliness = df[
    (df["cleanliness_score"] < 0) |
    (df["cleanliness_score"] > 10)
]

print("\nInvalid cleanliness records:")
print(invalid_cleanliness)


# Odor score must be between 0 and 10
invalid_odor = df[
    (df["odor_score"] < 0) |
    (df["odor_score"] > 10)
]

print("\nInvalid odor records:")
print(invalid_odor)


# Waste level must be between 0 and 10
invalid_waste = df[
    (df["waste_level"] < 0) |
    (df["waste_level"] > 10)
]

print("\nInvalid waste records:")
print(invalid_waste)


# Footfall cannot be negative
invalid_footfall = df[
    df["footfall"] < 0
]

print("\nInvalid footfall records:")
print(invalid_footfall)


# Water availability must be Yes or No
invalid_water = df[
    ~df["water_availability"].isin(["Yes", "No"])
]

print("\nInvalid water availability records:")
print(invalid_water)


# 5. REPLACE INVALID VALUES WITH NaN
print("\n========== FIXING INVALID VALUES ==========")

df.loc[
    (df["cleanliness_score"] < 0) |
    (df["cleanliness_score"] > 10),
    "cleanliness_score"
] = np.nan

df.loc[
    (df["odor_score"] < 0) |
    (df["odor_score"] > 10),
    "odor_score"
] = np.nan

df.loc[
    (df["waste_level"] < 0) |
    (df["waste_level"] > 10),
    "waste_level"
] = np.nan

df.loc[
    df["footfall"] < 0,
    "footfall"
] = np.nan

df.loc[
    ~df["water_availability"].isin(["Yes", "No"]),
    "water_availability"
] = np.nan


# 6. HANDLE MISSING VALUES
print("\n========== HANDLING MISSING VALUES ==========")

numeric_columns = [
    "cleanliness_score",
    "odor_score",
    "waste_level",
    "footfall",
    "complaints"
]

for column in numeric_columns:
    df[column] = df[column].fillna(
        df[column].median()
    )

df["water_availability"] = df[
    "water_availability"
].fillna(
    df["water_availability"].mode()[0]
)

print("Missing values handled successfully!")


# 7. REMOVE DUPLICATES
print("\n========== REMOVING DUPLICATES ==========")

df = df.drop_duplicates()

print(
    "Duplicates after cleaning:",
    df.duplicated().sum()
)


# 8. CONVERT DATE
print("\n========== DATE PROCESSING ==========")

df["inspection_date"] = pd.to_datetime(
    df["inspection_date"],
    errors="coerce"
)

df = df.dropna(
    subset=["inspection_date"]
)

print("Inspection dates processed successfully!")


# 9. OUTLIER DETECTION
print("\n========== OUTLIER DETECTION ==========")

def find_outliers(column):

    Q1 = df[column].quantile(0.25)
    Q3 = df[column].quantile(0.75)

    IQR = Q3 - Q1

    lower_limit = Q1 - (1.5 * IQR)
    upper_limit = Q3 + (1.5 * IQR)

    outliers = df[
        (df[column] < lower_limit) |
        (df[column] > upper_limit)
    ]

    return outliers


columns_for_outliers = [
    "cleanliness_score",
    "odor_score",
    "waste_level",
    "footfall",
    "complaints"
]

for column in columns_for_outliers:

    outliers = find_outliers(column)

    print(
        column,
        "outliers:",
        len(outliers)
    )


# 10. DATA TRANSFORMATION
print("\n========== DATA TRANSFORMATION ==========")

df["facility_status"] = np.where(
    df["cleanliness_score"] >= 7,
    "Good",
    "Needs Improvement"
)

print("Facility status column created!")


# 11. SAVE CLEANED DATASET
print("\n========== SAVING DATA ==========")

df.to_csv(
    output_file,
    index=False
)

print("Cleaned dataset saved successfully!")


# 12. FINAL RESULTS
print("\n========== FINAL RESULTS ==========")

print("\nFinal dataset shape:")
print(df.shape)

print("\nRemaining missing values:")
print(df.isnull().sum())

print("\nRemaining duplicate rows:")
print(df.duplicated().sum())

print("\n========== SUCCESS ==========")
print("Data cleaning completed successfully!")
print("Cleaned file created in the dataset folder.")