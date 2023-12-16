const employee = {
    name: 'Fenton',
    streetAddress: 'Homabay'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value};
}
const newEmployee = updateEmployeeWithKeyAndValue(employee, 'Hum', 'Kisumu');
console.log(newEmployee);
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'Nairobi', 'Tom mboya street');
console.log(employee);

function deleteFromEmployeeByKey(employee, key, value) {
    const myNewEmployees = {...employee};
    delete myNewEmployees[key];
    return myNewEmployees;
}
const myEmployees = deleteFromEmployeeByKey(employee, 'Nairobi');
console.log(myEmployees);
console.log(employee);

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
destructivelyDeleteFromEmployeeByKey(employee, 'Kisumu');
console.log(employee);