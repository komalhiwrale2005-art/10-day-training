# Day 3 – Data Analysis & Python for AI/ML

## Objective

The objective of Day 3 is to analyze a real-world facility dataset using Python libraries such as NumPy, Pandas, and Matplotlib.

The main tasks include:

* Loading and inspecting the dataset
* Identifying missing, duplicate, and invalid data
* Detecting outliers
* Cleaning and transforming the data
* Calculating key statistics
* Performing data analysis
* Identifying useful insights
* Creating data visualizations

---

## Technologies Used

* Python
* NumPy
* Pandas
* Matplotlib

---

## Dataset

The facility dataset contains information about different facilities.

### Dataset Fields

| Field                | Description                       |
| -------------------- | --------------------------------- |
| `facility_id`        | Unique ID of the facility         |
| `location`           | Location of the facility          |
| `cleanliness_score`  | Cleanliness score of the facility |
| `odor_score`         | Odor score of the facility        |
| `waste_level`        | Waste level of the facility       |
| `water_availability` | Availability of water             |
| `footfall`           | Number of visitors                |
| `complaints`         | Number of complaints              |
| `inspection_date`    | Date of facility inspection       |

---

## Data Cleaning

The dataset was inspected for common data quality problems.

### Problems Identified

* Missing values
* Duplicate records
* Invalid cleanliness scores
* Invalid odor scores
* Invalid footfall values
* Outliers

### Cleaning Steps

1. Loaded the raw CSV file using Pandas.
2. Checked the dataset shape and information.
3. Checked for missing values.
4. Checked for duplicate records.
5. Identified invalid values using logical conditions.
6. Replaced invalid values with missing values.
7. Filled missing numerical values using the median.
8. Filled missing categorical values using the mode.
9. Removed duplicate records.
10. Converted `inspection_date` into datetime format.
11. Detected outliers using the IQR method.
12. Created a `facility_status` column based on cleanliness score.
13. Saved the cleaned dataset as `cleaned_facility_data.csv`.

---

## Data Analysis

The cleaned dataset was analyzed using Pandas and NumPy.

### Analysis Performed

* Dataset shape and structure
* Descriptive statistics
* Mean
* Maximum
* Minimum
* Standard deviation
* Filtering facilities based on cleanliness score
* Sorting facilities by cleanliness score
* Location-wise analysis
* Total complaints by location
* Total footfall by location
* Average cleanliness by location
* Average waste level by location
* Facility status distribution
* Water availability analysis
* Correlation analysis

---

## Key Insights

1. The analysis helps identify locations with higher numbers of complaints, which can help prioritize maintenance and cleaning activities.

2. The cleanliness score distribution shows how cleanliness levels vary across the facilities.

3. Comparing footfall and complaints helps understand whether facilities with higher visitor activity also experience more complaints.

4. Location-wise cleanliness and waste analysis can help identify facilities that may require additional cleaning or maintenance.

---

## Visualizations

A total of **5 visualizations** were created according to the assignment requirements.

### 1. Average Cleanliness Score by Location

**Type:** Bar Chart

File:

`bar_average_cleanliness.png`

This chart compares the average cleanliness score of facilities across different locations.

### 2. Total Complaints by Location

**Type:** Bar Chart

File:

`bar_total_complaints.png`

This chart compares the total number of complaints across different locations.

### 3. Distribution of Cleanliness Scores

**Type:** Histogram

File:

`histogram_cleanliness_score.png`

This histogram shows the distribution of cleanliness scores across the facilities.

### 4. Footfall vs Complaints

**Type:** Scatter Plot

File:

`scatter_footfall_complaints.png`

This scatter plot shows the relationship between facility footfall and the number of complaints.

### 5. Complaints Over Inspection Date

**Type:** Line Chart

File:

`line_complaints_over_date.png`

This line chart shows how the number of complaints changes across inspection dates.

---

## Project Structure

```text
Day_03/
│
├── dataset/
│   ├── facility_data.csv
│   └── cleaned_facility_data.csv
│
├── data-cleaning/
│   └── data_cleaning.py
│
├── analysis/
│   └── analysis.py
│
├── visualizations/
│   ├── visualizations.py
│   ├── bar_average_cleanliness.png
│   ├── bar_total_complaints.png
│   ├── histogram_cleanliness_score.png
│   ├── scatter_footfall_complaints.png
│   └── line_complaints_over_date.png
│
└── README.md
```

---

## Conclusion

This project demonstrates how Python can be used for data cleaning, analysis, and visualization.

Using NumPy, Pandas, and Matplotlib, the facility dataset was cleaned, analyzed, and visualized to identify data quality issues, patterns, relationships, and useful insights.

The analysis can help in making better decisions about facility maintenance, cleanliness, waste management, and complaint handling.
