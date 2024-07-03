// STUDENT GRADE GENERATOR
// challange 1
let marks = prompt("Enter your marks")
//validate if the marks are within the valid range
if (marks >= 100 && marks < 0)
    console("Invalid marks");
  else
    //Function to assign grades to students based on theirmarks
  function studentGrade(marks) {
    if (marks > 79)
        console.log("A")
    else if (marks >= 60)
        console.log("B")
    else if (marks >= 49)
        console.log("C")
    else if (marks >= 40)
        console.log("D")
    else if(marks < 40)
    console.log("E")
    }

console.log(studentGrade(marks));
