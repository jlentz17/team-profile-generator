const fs = require("fs");
function generateHtml(teamArr) {
    for (let i = 0; i < teamArr.length; i++) {
        if (teamArr[i].role === "Engineer") {
            let engineerCard = 
            // create card and use varaible to pass in as string literal
          console.log(teamArr[i].name);
        } 
        if (teamArr[i].role === "Intern") {
          console.log(teamArr[i].name);
        } 
        if (teamArr[i].role === "Manager") {
          console.log(teamArr[i].name);
        } 
        
      }
}
fs.writeFile("../dist/index.html", generateHtml(teamArr), err => {
  if (err) throw err;

  console.log("Page works!!")
})
module.exports = generateHtml;