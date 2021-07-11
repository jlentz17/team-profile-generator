const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

// tests

test("creates an employee object", () => {
  const employee = new Employee("Lars", 500789, "larsbars@yahoo.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("makes getName method to return employee's name", () => {
  const employee = new Employee("Lars", 500789, "larsbars@yahoo.com");
  expect(employee.getName()).toEqual(expect.any(String));
})

test("makes getId method to return employee's id", () => {
  const employee = new Employee("Lars", 500789, "larsbars@yahoo.com");
  expect(employee.getId()).toEqual(expect.any(Number));
})

test("makes getEmail method to return employee's email", () => {
  const employee = new Employee("Lars", 500789, "larsbars@yahoo.com");
  expect(employee.getEmail()).toEqual(expect.any(String));
})
test("makes getRole method to return employee's role", () => {
  const employee = new Employee("Lars", 500789, "larsbars@yahoo.com");
  expect(employee.getRole()).toEqual(expect.any(String));
})
