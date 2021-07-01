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

test("makes getName method to return intern's name", () => {
    const intern = new Intern(
        "Jessica",
        84237984,
        "jessica@gmail.com",
        "cal state northridge"
      );
  
    expect(intern.getName()).toEqual(expect.any(String));
  });
  
  test("makes getId method to return intern's id", () => {
    const intern = new Intern(
        "Jessica",
        84237984,
        "jessica@gmail.com",
        "cal state northridge"
      );
    expect(intern.getId()).toEqual(expect.any(Number));
  });
  
  test("makes getEmail method to return intern's email", () => {
    const intern = new Intern(
        "Jessica",
        84237984,
        "jessica@gmail.com",
        "cal state northridge"
      );
    expect(intern.getEmail()).toEqual(expect.any(String));
  });
  
  test("makes getGithub method and returns intern's github info", () => {
    const intern = new Intern(
        "Jessica",
        84237984,
        "jessica@gmail.com",
        "cal state northridge"
      );
    expect(intern.getSchool()).toEqual(expect.any(String));
  });
  
  test("makes getRole method to return intern's role", () => {
    const intern = new Intern(
        "Jessica",
        84237984,
        "jessica@gmail.com",
        "cal state northridge"
      );
    expect(intern.getRole()).toEqual(expect.any(String));
  });
