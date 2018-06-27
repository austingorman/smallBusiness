const employee = [
  {
    employeeId: 1,
    name: "Jacob"
  },
  {
    employeeId: 2,
    name: "Brett"
  },
  {
    employeeId: 3,
    name: "Enya"
  },
  {
    employeeId: 4,
    name: "Jenn"
  },
  {
    employeeId: 5,
    name: "Jordan"
  }
]
const departments = [
  {
    departmentId: 1,
    department: "Cool Room"
  },
  {
    departmentId: 2,
    department: "Monkey Laundering"
  },
  {
    departmentId: 3,
    department: "New Age"
  },
]

const computers = [
  {
    computerId: 1,
    computer: "Apple"
  },
  {
    computerId: 2,
    computer: "Acer"
  }
]

const puttemTogether = [
  {
    employeeId: 1,
    departmentId: 1,
    computerId: 2
  },
  {
    employeeId: 2,
    departmentId: 1,
    computerId: 2
  },
  {
    employeeId: 3,
    departmentId: 3,
    computerId: 2
  },
  {
    employeeId: 4,
    departmentId: 1,
    computerId: 1
  },
  {
    employeeId: 5,
    departmentId: 1,
    computerId: 2
  }
]

const container = document.querySelector("#container")
let fragment = document.createDocumentFragment()
let card = document.createElement("article")
let h1 = document.createElement("header")
let deptSection = document.createElement("section")
let compSection = document.createElement("section")
card.className = "employee"

puttemTogether.forEach(function(object) {
  let employeeTogether = object.employeeId
  let departmentTogether = object.departmentId
  let computerTogether = object.computerId
  employee.forEach(function(name) {
    let employeeName = name.name
    let theEmployeeId = name.employeeId
      if(employeeTogether === theEmployeeId) {
        h1.textContent = `Employee: ${employeeName}`
      }
      departments.forEach(function(department) {
        let departmentName = department.department
        let theDepartmentId = department.departmentId
          if (departmentTogether === theDepartmentId) {
            deptSection.textContent = `Department: ${departmentName}`
          }
          computers.forEach(function(computer) {
            let computerName = computer.computer
            let theComputerId = computer.computerId
              if(computerTogether === theComputerId) {
                compSection.textContent = `Computer: ${computerName}`
              }
          })
      })
  })
  card.appendChild(h1)
  card.appendChild(deptSection)
  card.appendChild(compSection)
  fragment.appendChild(card)
  container.appendChild(fragment)
})


// <article class="employee">
//     <header class="employee__name">
//         <h1>Rainu Ittycheriah</h1>
//     </header>
//     <section class="employee__department">
//         Works in the IT department
//     </section>
//     <section class="employee__computer">
//         Currently using a 2015 MacBook Pro
//     </section>
// </article>