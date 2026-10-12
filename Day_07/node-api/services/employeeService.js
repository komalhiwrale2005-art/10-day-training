
const getAllEmployees = (employees) => {
  return employees;
};

const findEmployeeById = (employees, id) => {
  return employees.find((employee) => employee.id === String(id));
};

const addEmployee = (employees, employee) => {
  employees.push(employee);
  return employee;
};

const removeEmployee = (employees, id) => {
  return employees.filter((employee) => employee.id !== String(id));
};

module.exports = {
  getAllEmployees,
  findEmployeeById,
  addEmployee,
  removeEmployee,
};
