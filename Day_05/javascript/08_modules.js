
import {
    companyName,
    calculateAnnualSalary,
    getEmployeeDetails,
    isEligibleForBonus
} from "./employeeUtils.js";

console.log("=== JavaScript Modules ===");

console.log("Company:", companyName);

const employee = {
    id: 101,
    name: "Komal",
    department: "IT"
};

console.log("\n=== Employee Details ===");
console.log(getEmployeeDetails(employee));

console.log("\n=== Annual Salary ===");

const monthlySalary = 45000;
const annualSalary = calculateAnnualSalary(monthlySalary);

console.log("Monthly Salary:", monthlySalary);
console.log("Annual Salary:", annualSalary);

console.log("\n=== Bonus Eligibility ===");

console.log(
    "Eligible for bonus:",
    isEligibleForBonus(monthlySalary)
);

console.log(
    "Eligible for bonus with 60000 salary:",
    isEligibleForBonus(60000)
);
