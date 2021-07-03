const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/newHtmlTemplate");

const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const { functionDeclaration } = require("@babel/types");

// make an empty array that new employees will be pushed into

const teamArr = [];

// prompts

// const promptUser = () => {

const engineerQuestions = [
  {
    type: "input",
    message: "Please enter the engineer's name: ",
    name: "name",
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        console.log("You need to enter the name of the engineer!");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Please enter the engineer's ID number: ",
    name: "id",
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        console.log("You need to enter the id number of the engineer!");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Please enter the engineer's email address: ",
    name: "email",
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        console.log("You need to enter the email address of the engineer!");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Please enter the engineer's GitHub username: ",
    name: "github",
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        console.log("You need to enter the Github username of the engineer!");
        return false;
      }
    },
  },
];

const internQuestions = [
  {
    type: "input",
    message: "Please enter the intern's name: ",
    name: "name",
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        console.log("You need to enter the name of the intern!");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Please enter the intern's ID number: ",
    name: "id",
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        console.log("You need to enter the id number of the intern!");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Please enter the intern's email address: ",
    name: "email",
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        console.log("You need to enter the email address of the intern!");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Please enter the name of the school the intern attends: ",
    name: "school",
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        console.log("You need to enter the school name of the intern!");
        return false;
      }
    },
  },
];

const managerQuestions = [
  {
    type: "input",
    message: "Please enter the manager's name: ",
    name: "name",
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        console.log("You need to enter the name of the manager!");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Please enter the manager's ID number: ",
    name: "id",
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        console.log("You need to enter the id number of the manager!");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Please enter the manager's email address: ",
    name: "email",
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        console.log("You need to enter the email address of the manager!");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Please enter the manager's office number: ",
    name: "officeNumber",
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        console.log("You need to enter the office number of the manager!");
        return false;
      }
    },
  },
];

const addTeammate = [
  {
    type: "list",
    message: "Add another teammate??",
    name: "addTeammate",
    choices: [
      "Add an engineer?",
      "Add an intern?",
      "I'm all done adding teammates",
    ],
  },
];

// functions for the prompts
function askQuestions() {
  prompt(managerQuestions).then((data) => {
    const manager = new Manager(
      data.name,
      data.id,
      data.email,
      data.officeNumber
    );
    teamArr.push(manager);
    addToTeamArr();
  });
}

function addEngineer() {
  prompt(engineerQuestions).then((data) => {
    const engineer = new Engineer(
      data.name,
      data.id,
      data.email,
      data.github
    );
    teamArr.push(enginneer);
    return addToTeamArr();
  })
}

function addIntern() {
  prompt(internQuestions).then((data) => {
    const intern = new Intern(
      data.name,
      dfata.id,
      data.email,
      data.school
    );
    teamArr.push(intern);
    return addToTeamArr();
  })
}

function addToTeamArr() {
  prompt(addTeammate).then((data) => {
    if (data.addTeammate === "Add an engineer?") {
      addEngineer();
    } else if (data.addTeammate === "Add an intern?") {
      addIntern();
    } else {
      console.log("teamArr =" + teamArr);
      const membersHtml = generateHtml();
      const fullPage = newHtmlTemplate(membersHtml);
    }
  })
} 

function writeToHTML(fileName, readme) {
  fs.writeFile(fileName, readme, (err) => {
    if (err) throw err;
    console.log("New Readme File Created!");
  });
}

promptUser().then((readMe) => {
  writeToReadme("READMEtest.md", generateMarkdown(readMe));
  // return generateMarkdown(readMe);
});
module.exports = Index;
