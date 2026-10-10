export const companyName = "CareerLens";

export function calculateAnnualSalary(monthlySalary) {
    return monthlySalary * 12;
}

export function getEmployeeDetails(employee) {
    return `ID: ${employee.id}, Name: ${employee.name}, Department: ${employee.department}`;
}

export function isEligibleForBonus(salary) {
    return salary >= 50000;
}