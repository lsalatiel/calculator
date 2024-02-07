function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

let firstNumber, secondNumber, operator = undefined;
let displayValue = '';

const display = document.querySelector("#display");
display.textContent = "0";

function operate(a, b, operation) {
    switch (operation) {
        case 1:
            return sum(a, b);
        case 2:
            return sub(a, b);
        case 3:
            return mul(a, b);
        case 4:
            return div(a, b);
    }
}

const calculatorButtons = document.querySelector("#calculator-button-container");
for(let i = 0; i < 10; i++) {
    let button = document.createElement("button");
    button.textContent = i;
    button.classList.add("calculator-button");
    calculatorButtons.appendChild(button);
    
    button.addEventListener("click", () => {
        if(firstNumber === undefined)
            firstNumber = i;
        else
            secondNumber = i;

        displayValue += i;
        if(display.textContent === "0")
            display.textContent = i;
        else
            display.textContent += i;
        console.log(displayValue);
    });
}

for(let i = 1; i < 5; i++) {
    let button = document.createElement("button");
    switch(i) {
        case 1:
            button.textContent = "+";
            break;
        case 2:
            button.textContent = "-";
            break;
        case 3:
            button.textContent = "*";
            break;
        case 4:
            button.textContent = "/";
            break;
    }
    button.classList.add("calculator-button");
    calculatorButtons.appendChild(button);
    button.addEventListener("click", () => {
        operator = i;
        if(displayValue !== "" && displayValue[displayValue.length - 1] !== "+" &&
        displayValue[displayValue.length - 1] !== "-" && displayValue[displayValue.length - 1] !== "*" &&
        displayValue[displayValue.length - 1] !== "/") {
            displayValue += button.textContent;
            display.textContent = displayValue;
        }
        else if((displayValue === "" && button.textContent === "-") || ((displayValue !== ""
        && displayValue[displayValue.length - 1] !== button.textContent) &&
        (displayValue[displayValue.length - 1] === "+" || displayValue[displayValue.length - 1] === "-" ||
        displayValue[displayValue.length - 1] === "*" || displayValue[displayValue.length - 1] === "/"))) {
            displayValue = displayValue.slice(0, displayValue.length - 1) + button.textContent;
            display.textContent = displayValue;
        }
        console.log(displayValue);
    });
}

let equalsButton = document.createElement("button");
equalsButton.textContent = "=";
equalsButton.classList.add("calculator-button");
calculatorButtons.appendChild(equalsButton);

let clearButton = document.createElement("button");
clearButton.textContent = "C";
clearButton.classList.add("calculator-button");
calculatorButtons.appendChild(clearButton);
clearButton.addEventListener("click", () => {
    firstNumber = secondNumber = operator = undefined;
    display.textContent = "0";
    displayValue = '';
});


const buttons = document.querySelectorAll('.calculator-button');
buttons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor="#585b70";
    });
});

buttons.forEach((button) => {
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor="#4a4a4a";
    });
});

console.log(displayValue);
