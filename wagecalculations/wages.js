function calculateWage() {
    // Get input values
    const regularHoursWorked = document.getElementById("regularHoursWorked").valueAsNumber;
    const regularHourlyPayRate = document.getElementById("regularHourlyPayRate").valueAsNumber;
    const overtimeHours = document.getElementById("overtimeHours").valueAsNumber;
    const overtimeHourlyPayRate = document.getElementById("overtimeHourlyPayRate").valueAsNumber;

    // Calculate regular wage
    const regularWage = regularHoursWorked * regularHourlyPayRate;

    // Calculate overtime wage
    const overtimeWage = overtimeHours * overtimeHourlyPayRate;

    // Calculate total wage
    const totalWage = regularWage + overtimeWage;

    // Display the results
    const regularWageResult = document.getElementById("regularWageResult");
    regularWageResult.innerHTML = `Regular Wage: $${regularWage.toFixed(2)}`;

    const overtimeWageResult = document.getElementById("overtimeWageResult");
    overtimeWageResult.innerHTML = `Overtime Wage: $${overtimeWage.toFixed(2)}`;

    const totalWageResult = document.getElementById("totalWageResult");
    totalWageResult.innerHTML = `Total Wage: $${totalWage.toFixed(2)}`;
}