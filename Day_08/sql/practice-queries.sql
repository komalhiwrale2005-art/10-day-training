USE day08_training;

-- 1. Display all facilities
SELECT * FROM facilities;

-- 2. Display all inspections
SELECT * FROM inspections;

-- 3. Display all complaints
SELECT * FROM complaints;

-- 4. Display all departments
SELECT * FROM departments;

-- 5. Display all employees
SELECT * FROM employees;

-- 6. Find active facilities
SELECT * FROM facilities
WHERE is_active = TRUE;

-- 7. Show facilities in alphabetical order
SELECT * FROM facilities
ORDER BY name ASC;

-- 8. Find inspections with cleanliness score below 50
SELECT * FROM inspections
WHERE cleanliness_score < 50;

-- 9. Count complaints by status
SELECT status, COUNT(*) AS total_complaints
FROM complaints
GROUP BY status;

-- 10. Count employees in each department
SELECT department_id, COUNT(*) AS total_employees
FROM employees
GROUP BY department_id;

-- 11. Display employees with their department names
SELECT
    employees.name AS employee_name,
    employees.salary,
    departments.name AS department_name
FROM employees
INNER JOIN departments
    ON employees.department_id = departments.id;

-- 12. Display inspections with facility names
SELECT
    inspections.id,
    facilities.name AS facility_name,
    inspections.inspection_date,
    inspections.cleanliness_score
FROM inspections
INNER JOIN facilities
    ON inspections.facility_id = facilities.id;

-- 13. Display complaints with facility names
SELECT
    complaints.title,
    complaints.status,
    facilities.name AS facility_name
FROM complaints
INNER JOIN facilities
    ON complaints.facility_id = facilities.id;

    -- 14. Find the employee with the highest salary
SELECT name, salary
FROM employees
WHERE salary = (
    SELECT MAX(salary)
    FROM employees
);

-- 15. Find employees earning above average salary
SELECT name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);

-- 16. Show departments having more than 2 employees
SELECT
    department_id,
    COUNT(*) AS total_employees
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 2;

-- 17. Find facilities with poor cleanliness scores
SELECT DISTINCT facilities.name
FROM facilities
INNER JOIN inspections
    ON facilities.id = inspections.facility_id
WHERE inspections.cleanliness_score < 50;

-- 18. Show inspection history for each facility
SELECT
    facilities.name AS facility_name,
    inspections.inspection_date,
    inspections.inspector_name,
    inspections.cleanliness_score,
    inspections.remarks
FROM facilities
INNER JOIN inspections
    ON facilities.id = inspections.facility_id
ORDER BY inspections.inspection_date DESC;

-- 19. Count complaints for each facility
SELECT
    facilities.name AS facility_name,
    COUNT(complaints.id) AS total_complaints
FROM facilities
LEFT JOIN complaints
    ON facilities.id = complaints.facility_id
GROUP BY facilities.id, facilities.name;

-- 20. Find complaints that are still pending
SELECT *
FROM complaints
WHERE status = 'pending'
ORDER BY created_at DESC;

-- 21. Create an index for facility name searches
CREATE INDEX idx_facilities_name
ON facilities(name);

-- 22. Create an index for complaint status searches
CREATE INDEX idx_complaints_status
ON complaints(status);

-- 23. Transaction example: insert a department
START TRANSACTION;

INSERT INTO departments (name, location)
VALUES ('Information Technology', 'Main Office');

-- Use COMMIT to save the transaction.
-- Use ROLLBACK instead if you want to cancel it.
COMMIT;