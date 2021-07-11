const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

// tests
test("creates an engineer object", () => {
  const engineer = new Engineer("name", 500789, "email", "github17@github.io");

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

test("makes getName method to return engineer's name", () => {
  const engineer = new Engineer("name", 500789, "email", "github17@github.io");

  expect(engineer.getName()).toEqual(expect.any(String));
});

test("makes getId method to return engineer's id", () => {
  const engineer = new Engineer("name", 500789, "email", "github17@github.io");
  expect(engineer.getId()).toEqual(expect.any(Number));
});

test("makes getEmail method to return engineer's email", () => {
  const engineer = new Engineer("name", 500789, "email", "github17@github.io");
  expect(engineer.getEmail()).toEqual(expect.any(String));
});

test("makes getGithub method and returns engineer's github info", () => {
  const engineer = new Engineer("name", 500789, "email", "github17@github.io");
  expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("makes getRole method to return engineer's role", () => {
  const engineer = new Engineer("name", 500789, "email", "github17@github.io");
  expect(engineer.getRole()).toEqual(expect.any(String));
});
