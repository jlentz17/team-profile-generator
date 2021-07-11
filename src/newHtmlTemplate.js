function generateHtml(teamArr) {
  // make a string of cards for each employee
  let allTeamMembers = "";
  teamArr.forEach(employee => {
    let title = "";
    let specialProperty = "";
    if ("github" in employee) {
      title = "Engineer";
      specialProperty = `<a target="_blank" href="https://www.github.com/${employee.github}"> Github: ${employee.github}</a>`
    } else if
    ("school" in employee) {
        title = "Intern"
        specialProperty = `School Name: ${employee.school}`
    } else if 
      ("officeNumber" in employee) {
        title = "Manager"
        specialProperty = `OfficeNumber: ${employee.officeNumber}`
      }

      // create card html card templates
      allTeamMembers += `
      <div class="col">
            <div class="card" style="width: 18rem">
                <div class="card-header">
                <h3>${employee.name}</h3>
                <h4>${title}</h4>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item employeeProperties"> Employee ID: <span>${employee.id}</span></li>
                <a href="mailto:${employee.email}" class="list-group-item employeeProperties"> Email: <span>${employee.email}</span></a>
                <li class="list-group-item employeeProperties"> <span>${specialProperty}</span></li>
                </ul>
            </div>
        </div>
      `
  })

  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"/>
    <link rel="stylesheet" href="style.css" />
    <title>My Team Profile</title>
  </head>
  <body>
  <!---HEADER---->
    <header>
        <nav  class="header navbar navbar-expand-lg">
          <a class="header navbar-brand" href="#"> My Team </a>
        </nav>
    </header>
    <!---Employee Cards Container--->
    <div id=employeeCards class="row">
    ${allTeamMembers}
    </div>
      </div>
    </div>
  </body>
</html>
`;
}
module.exports = generateHtml;