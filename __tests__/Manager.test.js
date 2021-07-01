const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("Creates a manager object", () => {
  const manager = new Manager("Frodo", 8327893, "djsaodja@kjdao.com", 8492380430);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});
