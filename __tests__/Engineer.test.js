const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer("name", 500789, "email", "github17@github.io");
  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});
