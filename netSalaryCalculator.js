let basicSalary = prompt("Enter your basic salary");
let benefits = prompt("Enter your benefits");

function netSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;

    let tax;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        tax = grossSalary * 0.25;
    } else if (grossSalary <= 500000) {
        tax = grossSalary * 0.3;
    } else if (grossSalary <= 800000) {
        tax = grossSalary * 0.325;
    } else if (grossSalary > 800000) {
        tax = grossSalary * 0.35;
    }

    let netSalary = grossSalary - tax;
    console.log(netSalary);
}

netSalary(basicSalary, benefits);
