const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern(
    "Jessica",
    84237984,
    "jessica@gmail.com",
    "cal state northridge"
  );

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});
