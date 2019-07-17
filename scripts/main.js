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
    studentComponent = createStudentComponent1(student,"failing")
  }
  studentContainer1.innerHTML += studentComponent
}