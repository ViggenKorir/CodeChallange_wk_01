// STUDENT GRADE GENERATOR
// challange 1
let marks = prompt("Enter your marks")
marks <= 100 && marks >= 0;
if (marks > 100)
    console.log("Invalid marks")
else if (marks < 0)
    console.log("Invalid marks")
function studentGrade(marks) {
    if (marks > 79)
        console.log("A")
    else if (marks >= 60)
        console.log("B")
    else if (marks >= 49)
        console.log("C")
    else if (marks >= 40)
        console.log("D")
    else (marks < 40)
    console.log("E")
}

console.log(studentGrade(marks))