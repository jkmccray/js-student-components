// ------ Practice: Student Components ------
const createStudentComponent = (name, subject, info, cls) => {
  return `
      <div class="student">
          <h1 class="xx-large ${cls}">${name}</h1>
          <section class="bordered dashed section--padded">${subject}</section>
          <aside class="pushRight">${info}</aside>

      </div>
  `
}

const studentContainer = document.querySelector("#container")

for (const student of students) {
  let studentComponent = ""
  if (student.score >= 60) {
    studentComponent = createStudentComponent(
      student.name,
      student.subject,
      student.info,
      "passing"
    )

  } else {
    studentComponent = createStudentComponent(
      student.name,
      student.subject,
      student.info,
      "failing"
    )
  }
  // studentContainer.innerHTML += studentComponent
}


// ------ Practice: One Object to Rule Them All ------

const createStudentComponent1 = (object, cls) => {
  return `
      <div class="student">
          <h1 class="xx-large ${cls}">${object.name}</h1>
          <section class="bordered dashed section--padded">${object.subject}</section>
          <aside class="pushRight">${object.info}</aside>

      </div>
  `
}

const studentContainer1 = document.querySelector("#container")

for (const student of students) {
  let studentComponent = ""
  if (student.score >= 60) {
    studentComponent = createStudentComponent1(student, "passing")

  } else {
    studentComponent = createStudentComponent1(student, "failing")
  }
  // studentContainer1.innerHTML += studentComponent
}

// ------ Challenge: Composition of Smaller Components ------
// Write functions that build the sub-components of the larger student component.

const createH1 = (studentObject, cls) => {
  return `<h1 class="xx-large ${cls}">${studentObject}</h1>`
}

const createSection = (studentObject) => {
  return `<section class="bordered dashed section--padded">${studentObject}</section>`
}

const createAside = (studentObject) => {
  return `<aside class="pushRight">${studentObject}</aside>`
}

const createStudentComponent2 = (studentObject, cls) => {
  return `
  <div class="student">
  ${createH1(studentObject.name, cls)}
  ${createSection(studentObject.subject)}
  ${createAside(studentObject.info)}
  </div>
  `
}

const studentContainer2 = document.querySelector("#container")

for (const student of students) {
  let studentComponent = ""
  if (student.score >= 60) {
    studentComponent = createStudentComponent2(student, "passing")
    
  } else {
    studentComponent = createStudentComponent2(student, "failing")
  }
  // studentContainer2.innerHTML += studentComponent
}

// ------ Challenge: Generic HTML Function ------

const createGenericElement = (tagName, studentObject, cls) => {
  return `<${tagName} class="${cls}">${studentObject}</${tagName}>`
}

const createStudentComponent3 = (studentObject) => `
    <div id="student">
        ${createGenericElement("h1", studentObject.name, "xx-large passing")}
        ${createGenericElement("section", studentObject.subject, "bordered dashed section--padded")}
        ${createGenericElement("aside", studentObject.info, "pushRight")}
    </div>
`

const createStudentUsingElementFunction = createStudentComponent3(students[1])
// studentContainer.innerHTML = createStudentUsingElementFunction



