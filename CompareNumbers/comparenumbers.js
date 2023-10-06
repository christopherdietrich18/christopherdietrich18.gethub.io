// Get references to the input elements and the result paragraph
let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let num3Input = document.getElementById("num3");
let resultParagraph = document.getElementById("result");
let calculateButton = document.getElementById("calculate");

// Function to find and display the maximum of three numbers
function findMaximum() {
    let num1 = Number(num1Input.value);
    let num2 = Number(num2Input.value);
    let num3 = Number(num3Input.value);

    let maximum;

    if (num1 >= num2 && num1 >= num3) {
        maximum = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        maximum = num2;
    } else {
        maximum = num3;
    }

    resultParagraph.innerHTML = `The maximum number is: ${maximum}`;
}

// Attach the findMaximum function to the button's click event
calculateButton.addEventListener("click", findMaximum);