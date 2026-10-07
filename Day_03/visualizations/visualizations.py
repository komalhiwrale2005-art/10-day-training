import pandas as pd
import matplotlib.pyplot as plt
import os

# File paths
input_file = r"C:\Desktop\10 Day's Training\Day_03\dataset\cleaned_facility_data.csv"
output_folder = r"C:\Desktop\10 Day's Training\Day_03\visualizations"

# Create output folder if it does not exist
os.makedirs(output_folder, exist_ok=True)

# Load cleaned dataset
df = pd.read_csv(input_file)

print("Dataset loaded successfully!")

# Convert inspection_date to datetime
df["inspection_date"] = pd.to_datetime(df["inspection_date"])

# Group data by location
location_data = df.groupby("location")


# --------------------------------------------------
# 1. Average Cleanliness Score - Bar Chart
# --------------------------------------------------

avg_cleanliness = location_data["cleanliness_score"].mean()

plt.figure(figsize=(8, 5))

avg_cleanliness.plot(kind="bar")

plt.title("Average Cleanliness Score by Location")
plt.xlabel("Location")
plt.ylabel("Average Cleanliness Score")
plt.xticks(rotation=45)
plt.tight_layout()

plt.savefig(
    os.path.join(output_folder, "bar_average_cleanliness.png")
)

plt.close()

print("1. Average cleanliness bar chart created.")


# --------------------------------------------------
# 2. Total Complaints - Bar Chart
# --------------------------------------------------

total_complaints = location_data["complaints"].sum()

plt.figure(figsize=(8, 5))

total_complaints.plot(kind="bar")

plt.title("Total Complaints by Location")
plt.xlabel("Location")
plt.ylabel("Total Complaints")
plt.xticks(rotation=45)
plt.tight_layout()

plt.savefig(
    os.path.join(output_folder, "bar_total_complaints.png")
)

plt.close()

print("2. Total complaints bar chart created.")


# --------------------------------------------------
# 3. Cleanliness Score - Histogram
# --------------------------------------------------

plt.figure(figsize=(8, 5))

plt.hist(
    df["cleanliness_score"],
    bins=10,
    edgecolor="black"
)

plt.title("Distribution of Cleanliness Scores")
plt.xlabel("Cleanliness Score")
plt.ylabel("Number of Facilities")
plt.tight_layout()

plt.savefig(
    os.path.join(output_folder, "histogram_cleanliness_score.png")
)

plt.close()

print("3. Cleanliness histogram created.")


# --------------------------------------------------
# 4. Footfall vs Complaints - Scatter Plot
# --------------------------------------------------

plt.figure(figsize=(8, 5))

plt.scatter(
    df["footfall"],
    df["complaints"]
)

plt.title("Footfall vs Complaints")
plt.xlabel("Footfall")
plt.ylabel("Complaints")
plt.tight_layout()

plt.savefig(
    os.path.join(output_folder, "scatter_footfall_complaints.png")
)

plt.close()

print("4. Footfall vs complaints scatter plot created.")


# --------------------------------------------------
# 5. Complaints Over Inspection Date - Line Chart
# --------------------------------------------------

complaints_over_date = (
    df.groupby("inspection_date")["complaints"]
    .sum()
    .sort_index()
)

plt.figure(figsize=(10, 5))

plt.plot(
    complaints_over_date.index,
    complaints_over_date.values,
    marker="o"
)

plt.title("Complaints Over Inspection Date")
plt.xlabel("Inspection Date")
plt.ylabel("Total Complaints")
plt.xticks(rotation=45)
plt.tight_layout()

plt.savefig(
    os.path.join(output_folder, "line_complaints_over_date.png")
)

plt.close()

print("5. Complaints line chart created.")


# --------------------------------------------------
# Final Message
# --------------------------------------------------

print()
print("====================================")
print("ALL 5 REQUIRED VISUALIZATIONS CREATED!")
print("====================================")