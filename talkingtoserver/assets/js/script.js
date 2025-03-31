document.getElementById("header").innerHTML = "Calculator";

function calculate() {
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;
    let operator = document.getElementById("operator").value;
    let answerElement = document.getElementById("answer");

    // Check if inputs are empty
    if (num1 === "" || num2 === "") {
        answerElement.innerHTML = "❌ Please enter both numbers!";
        answerElement.style.color = "red";
        return;
    }

    // Convert inputs to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Perform calculation
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                answerElement.innerHTML = "❌ Cannot divide by zero!";
                answerElement.style.color = "red";
                return;
            }
            result = num1 / num2;
            break;
        default:
            answerElement.innerHTML = "⚠️ Select an operator!";
            answerElement.style.color = "orange";
            return;
    }

    // Display result
    answerElement.innerHTML = `✅ Result: ${result}`;
    answerElement.style.color = "#007bff";
}


// Calculator Using Switch Statement.

// Button Onclick Event

// document.getElementById("header").innerHTML="Welcome"
// document.getElementById("header").style.color= "green"
// function displayName(){
//     let name= document.getElementById("name").value;
//     document.getElementById("nameHeader").innerHTML= name
// }
// Button Onclick Event

// Calcolator: Using IF Else Statement
