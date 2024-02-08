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
        case "+":
            return sum(a, b);
        case "-":
            return sub(a, b);
        case "*":
            return mul(a, b);
        case "/":
            return div(a, b);
    }
}

function operateDisplayValue(displayValue) {
    if(displayValue[displayValue.length - 1] === "+" || displayValue[displayValue.length - 1] === "-" ||
    displayValue[displayValue.length - 1] === "*" || displayValue[displayValue.length - 1] === "/") {
        displayValue = displayValue.slice(0, displayValue.length - 1);
    }

    let i = 0;
    let firstNumberStr = "";
    let firstNumber = 0;
    for(i = 0; i < displayValue.length; i++) {
        if(i != 0 && (displayValue[i] === "+" || displayValue[i] === "-" || displayValue[i] === "*" ||
            displayValue[i] === "/")) {
            break;
        }
        firstNumberStr += displayValue[i];
    }

    if(i === displayValue.length)
        return displayValue;

    firstNumber = parseInt(firstNumberStr);

    while(true) {
        operator = displayValue[i];

        let secondNumberStr = "";
        let secondNumber = 0;
        for(i = i + 1; i < displayValue.length; i++) {
            if(displayValue[i] === "+" || displayValue[i] === "-" || displayValue[i] === "*" ||
                displayValue[i] === "/") {
                break;
            }
            secondNumberStr += displayValue[i];
        }

        secondNumber = parseInt(secondNumberStr);

        let result = operate(firstNumber, secondNumber, operator);
        firstNumber = result;

        if(i === displayValue.length)
            return result;
    }
}

const calculatorButtons = document.querySelector("#calculator-button-container");
for(let i = 0; i < 10; i++) {
    let button = document.createElement("button");
    button.textContent = i;
    button.classList.add("calculator-button");
    calculatorButtons.appendChild(button);
    
    button.addEventListener("click", () => {
        displayValue += i;
        if(display.textContent === "0")
            display.textContent = i;
        else
            display.textContent += i;
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
        if(displayValue !== "" && displayValue[displayValue.length - 1] !== "+" &&
        displayValue[displayValue.length - 1] !== "-" && displayValue[displayValue.length - 1] !== "*" &&
        displayValue[displayValue.length - 1] !== "/") {
            displayValue += button.textContent;
            display.textContent = displayValue;
        }
        else if((displayValue === "" && button.textContent === "-") || ((displayValue !== ""
        && displayValue !== "-" && displayValue[displayValue.length - 1] !== button.textContent) &&
        (displayValue[displayValue.length - 1] === "+" || displayValue[displayValue.length - 1] === "-" ||
        displayValue[displayValue.length - 1] === "*" || displayValue[displayValue.length - 1] === "/"))) {
            displayValue = displayValue.slice(0, displayValue.length - 1) + button.textContent;
            display.textContent = displayValue;
        }
    });
}

let equalsButton = document.createElement("button");
equalsButton.textContent = "=";
equalsButton.classList.add("calculator-button");
calculatorButtons.appendChild(equalsButton);
equalsButton.addEventListener("click", () => {
    display.textContent = operateDisplayValue(displayValue);
    displayValue = display.textContent;
});

let clearButton = document.createElement("button");
clearButton.textContent = "C";
clearButton.classList.add("calculator-button");
calculatorButtons.appendChild(clearButton);
clearButton.addEventListener("click", () => {
    display.textContent = "0";
    displayValue = '';
});

let backspaceButton = document.createElement("button");
backspaceButton.textContent = "←";
backspaceButton.classList.add("calculator-button");
calculatorButtons.appendChild(backspaceButton);
backspaceButton.addEventListener("click", () => {
    displayValue = displayValue.slice(0, displayValue.length - 1);
    if(displayValue === "")
        display.textContent = "0";
    else
        display.textContent = displayValue;
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

