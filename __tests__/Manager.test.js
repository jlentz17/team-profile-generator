const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

// tests
test("Creates a manager object", () => {
  const manager = new Manager("Frodo", 8327893, "djsaodja@kjdao.com", 8492380430);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("makes getName method to return manager's name", () => {
    const manager = new Manager("Frodo", 8327893, "djsaodja@kjdao.com", 8492380430);
  
    expect(manager.getName()).toEqual(expect.any(String));
  });
  
  test("makes getId method to return manager's id", () => {
    const manager = new Manager("Frodo", 8327893, "djsaodja@kjdao.com", 8492380430);
    expect(manager.getId()).toEqual(expect.any(Number));
  });
  
  test("makes getEmail method to return manager's email", () => {
    const manager = new Manager("Frodo", 8327893, "djsaodja@kjdao.com", 8492380430);
    expect(manager.getEmail()).toEqual(expect.any(String));
  });
  
  test("makes getOfficeNumber method and returns manager's office number", () => {
    const manager = new Manager("Frodo", 8327893, "djsaodja@kjdao.com", 8492380430);
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
  });
  
  test("makes getRole method to return manager's role", () => {
    const manager = new Manager("Frodo", 8327893, "djsaodja@kjdao.com", 8492380430);
    expect(manager.getRole()).toEqual(expect.any(String));
  });
