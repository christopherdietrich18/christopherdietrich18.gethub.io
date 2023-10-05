function calculateWage() {
    // Get input values
    let regularHoursWorked = document.getElementById("regularHoursWorked").valueAsNumber;
    let regularHourlyPayRate = document.getElementById("regularHourlyPayRate").valueAsNumber;
    let overtimeHours = document.getElementById("overtimeHours").valueAsNumber;
    let overtimeHourlyPayRate = document.getElementById("overtimeHourlyPayRate").valueAsNumber;

    // Calculate regular wage
    let regularWage = regularHoursWorked * regularHourlyPayRate;

    // Calculate overtime wage
    let overtimeWage = overtimeHours * overtimeHourlyPayRate;

    // Calculate total wage
    let totalWage = regularWage + overtimeWage;

    // Display the results
    let regularWageResult = document.getElementById("regularWageResult");
    regularWageResult.innerHTML = `Regular Wage: $${regularWage.toFixed(2)}`;

    let overtimeWageResult = document.getElementById("overtimeWageResult");
    overtimeWageResult.innerHTML = `Overtime Wage: $${overtimeWage.toFixed(2)}`;

    let totalWageResult = document.getElementById("totalWageResult");
    totalWageResult.innerHTML = `Total Wage: $${totalWage.toFixed(2)}`;
}