let basicSalary = prompt("Enter your basic salary");
let benefits = prompt("Enter your benefits");

function netSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    console.log(grossSalary);
}
    const payeeRates = {}

// Determine tax based on gross salary
if (grossSalary <= 24000) {
    tax = grossSalary * 10 / 100;
} else if (grossSalary <= 32333) {
    tax = grossSalary * 25 / 100;
} else if (grossSalary <= 500000) {
    tax = grossSalary * 30 / 100;
} else if (grossSalary <= 800000) {
    tax = grossSalary * 32.5 / 100;
} else if (grossSalary > 800000) {
    tax = grossSalary * 35 / 100;
}

// Calculate net salary
// let netSalary = grossSalary - tax;
console.log(netSalary);
