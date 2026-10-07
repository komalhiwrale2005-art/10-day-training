import pandas as pd
import numpy as np

# File path
input_file = r"C:\Desktop\10 Day's Training\Day_03\dataset\cleaned_facility_data.csv"


# 1. LOAD CLEANED DATA
print("\n========== LOADING DATA ==========")

df = pd.read_csv(input_file)

print("Dataset loaded successfully!")

print("\nFirst 5 rows:")
print(df.head())

print("\nDataset shape:")
print(df.shape)


# 2. BASIC INFORMATION
print("\n========== DATA INFORMATION ==========")

print(df.info())


# 3. STATISTICAL SUMMARY
print("\n========== STATISTICAL SUMMARY ==========")

print(df.describe())


# 4. NUMPY ANALYSIS
print("\n========== NUMPY ANALYSIS ==========")

cleanliness_array = np.array(df["cleanliness_score"])

print("Cleanliness scores:")
print(cleanliness_array)

print("\nArray dimension:")
print(cleanliness_array.ndim)

print("\nArray shape:")
print(cleanliness_array.shape)

print("\nFirst value:")
print(cleanliness_array[0])

print("\nFirst 5 values:")
print(cleanliness_array[:5])

print("\nAverage cleanliness score:")
print(np.mean(cleanliness_array))

print("\nMaximum cleanliness score:")
print(np.max(cleanliness_array))

print("\nMinimum cleanliness score:")
print(np.min(cleanliness_array))

print("\nStandard deviation:")
print(np.std(cleanliness_array))


# 5. FILTERING
print("\n========== FILTERING ==========")

good_facilities = df[
    df["cleanliness_score"] >= 7
]

print("Facilities with cleanliness score >= 7:")

print(
    good_facilities[
        ["facility_id", "location", "cleanliness_score"]
    ]
)


# 6. SORTING
print("\n========== SORTING ==========")

sorted_facilities = df.sort_values(
    by="cleanliness_score",
    ascending=False
)

print("Top 10 cleanest facilities:")

print(
    sorted_facilities[
        ["facility_id", "location", "cleanliness_score"]
    ].head(10)
)


# 7. GROUP BY LOCATION
print("\n========== LOCATION ANALYSIS ==========")

location_analysis = df.groupby("location").agg(
    average_cleanliness=("cleanliness_score", "mean"),
    average_odor=("odor_score", "mean"),
    average_waste=("waste_level", "mean"),
    total_footfall=("footfall", "sum"),
    total_complaints=("complaints", "sum")
)

print(location_analysis)


# 8. HIGHEST COMPLAINT LOCATION
print("\n========== COMPLAINT ANALYSIS ==========")

highest_complaints = location_analysis[
    "total_complaints"
].idxmax()

print(
    "Location with highest complaints:",
    highest_complaints
)


# 9. HIGHEST FOOTFALL LOCATION
highest_footfall = location_analysis[
    "total_footfall"
].idxmax()

print(
    "Location with highest total footfall:",
    highest_footfall
)


# 10. BEST CLEANLINESS LOCATION
best_cleanliness = location_analysis[
    "average_cleanliness"
].idxmax()

print(
    "Location with best average cleanliness:",
    best_cleanliness
)


# 11. FACILITY STATUS
print("\n========== FACILITY STATUS ==========")

status_count = df["facility_status"].value_counts()

print(status_count)


# 12. WATER AVAILABILITY
print("\n========== WATER AVAILABILITY ==========")

water_count = df["water_availability"].value_counts()

print(water_count)


# 13. CORRELATION ANALYSIS
print("\n========== CORRELATION ANALYSIS ==========")

correlation = df[
    [
        "cleanliness_score",
        "odor_score",
        "waste_level",
        "footfall",
        "complaints"
    ]
].corr()

print(correlation)


# 14. KEY INSIGHTS
print("\n========== KEY INSIGHTS ==========")

print(
    "1. Best average cleanliness location:",
    best_cleanliness
)

print(
    "2. Highest complaint location:",
    highest_complaints
)

print(
    "3. Highest total footfall location:",
    highest_footfall
)

print("\n========== ANALYSIS COMPLETED ==========")