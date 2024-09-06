let firstNumber = "";
let secondNumber = "";
let operator = "";
let operationText = "";
let result = "";

const numbers = [
    {
        name: "one",
        value:"1",
    },
    {
        name: "two",
        value:"2",
    },
    {
        name: "three",
        value:"3",
    },
    {
        name: "four",
        value:"4",
    },
    {
        name: "five",
        value:"5",
    },
    {
        name: "six",
        value:"6",
    },
    {
        name: "seven",
        value:"7",
    },
    {
        name: "eight",
        value:"8",
    },
    {
        name: "nine",
        value:"9",
    },
    {
        name: "zero",
        value:"0",
    },
    {
        name: "comma",
        value:".",
    },
    
]

const operators = [
    {
        name: "percent",
        value: "%",
    },
    {
        name: "divide",
        value: "/",
    },
    {
        name: "multiply",
        value: "*",
    },
    {
        name: "minus",
        value: "-",
    },
    {
        name: "plus",
        value: "+",
    },
]

const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        //Als er AC wordt gedrukt
        if(button.id === "ac") {
            //variabeln setten
            firstNumber = "";
            secondNumber = "";
            operator = "";
            operationText = "";
            result = "";
            display.textContent = 0;
        }
        if(firstNumber === "" && operator === "" && secondNumber === "" && result === "") {
            //state 0 0 0 0
            console.log("State: 0 0 0 0");
            //variabelen setten
            firstNumber = "";
            secondNumber = "";
            operator = "";
            operationText = "";
            result = "";
            display.textContent = 0;
            //als er een nummer wordt gedrukt
            if(isNumber(button.id)){
                const number = getObject(button.id, numbers);
                firstNumber += number[0].value;
                secondNumber = "";
                operator = "";
                operationText = "";
                result = "";
                display.textContent = firstNumber + operationText + secondNumber;
            }
            //als er een operator wordt gedrukt
            if(isOperator(button.id)){
                const operation = getObject(button.id, operators);
                firstNumber = 0;
                secondNumber = "";
                operator = operation[0].name;
                operationText = operation[0].value;
                result = "";
                display.textContent = firstNumber + operationText + secondNumber;
            }
            //als er equals wordt gedrukt
        } else {
            if(firstNumber !== "" && operator === "" && secondNumber === "" && result === "") {
                //state 1 0 0 0
                console.log("State: 1 0 0 0");
                //variabelen setten
                //firstNumber = "";
                secondNumber = "";
                operator = "";
                operationText = "";
                result = "";
                //display.textContent = 0;
                //als er een nummer wordt gedrukt
                if(isNumber(button.id)){
                    const number = getObject(button.id, numbers);
                    firstNumber += number[0].value;
                    secondNumber = "";
                    operator = "";
                    operationText = "";
                    result = "";
                    display.textContent = firstNumber + operationText + secondNumber;
                }
                //als er een operator wordt gedrukt
                if(isOperator(button.id)){
                    const operation = getObject(button.id, operators);
                    secondNumber = "";
                    operator = operation[0].name;
                    operationText = operation[0].value;
                    result = "";
                    display.textContent = firstNumber + operationText + secondNumber;
                }
                //als er equals wordt gedrukt
            } else {
                if(firstNumber !== "" && operator !== "" && secondNumber === "" && result === "") {
                    //state 1 1 0 0
                    console.log("State: 1 1 0 0");
                    //variabelen setten
                    //firstNumber = "";
                    secondNumber = "";
                    //operator = "";
                    //operationText = "";
                    result = "";
                    //display.textContent = 0;
                    //als er een nummer wordt gedrukt
                    if(isNumber(button.id)){
                        const number = getObject(button.id, numbers);
                        //firstNumber += number[0].value;
                        secondNumber += number[0].value;
                        //operator = "";
                        //operationText = "";
                        result = "";
                        display.textContent = firstNumber + operationText + secondNumber;
                    }
                    //als er een operator wordt gedrukt
                    
                    //als er equals wordt gedrukt
                } else {
                    if(firstNumber !== "" && operator !== "" && secondNumber !== "" && result === "") {
                        //state 1 1 1 0
                        console.log("State: 1 1 1 0");
                        //variabelen setten
                        //firstNumber = "";
                        //secondNumber = "";
                        //operator = "";
                        result = "";
                        //display.textContent = 0;
                        //als er een nummer wordt gedrukt
                        if(isNumber(button.id)){
                            const number = getObject(button.id, numbers);
                            //firstNumber += number[0].value;
                            secondNumber += number[0].value;
                            //operator = "";
                            //operationText = "";
                            result = "";
                            display.textContent = firstNumber + operationText + secondNumber;
                        }
                        //als er een operator wordt gedrukt
                        if(isOperator(button.id)){
                            if(isOperator(button.id)){
                                let result;
                                if(operator === "divide") {
                                    if(secondNumber === "0") {
                                        firstNumber = "";
                                        secondNumber = "";
                                        operator = "";
                                        operationText = "";
                                        result = "";
                                        console.log("Error: You cannot divide by 0!");
                                        display.textContent = "Error";
                                    } else {
                                        result = operate(operator, firstNumber, secondNumber);
                                    }
                                }
                                if(operator === "multiply") {
                                    result = operate(operator, firstNumber, secondNumber);
                                }
                                if(operator === "minus") {
                                    result = operate(operator, firstNumber, secondNumber);
                                }
                                if(operator === "plus") {
                                    result = operate(operator, firstNumber, secondNumber);
                                }
                                if(operator === "percent") {
                                    result = operate(operator, firstNumber, secondNumber);
                                }
                                const operation = getObject(button.id, operators);
                                firstNumber = result;
                                secondNumber = "";
                                operator = operation[0].name;
                                operationText = operation[0].value;
                                result = "";
                                display.textContent = firstNumber + operationText + secondNumber;
                            }
                        }
                        //als er equals wordt gedrukt
                        if(button.id === "equals"){
                            let resultEquation;
                            if(operator === "divide") {
                                if(secondNumber === "0") {
                                    firstNumber = "";
                                    secondNumber = "";
                                    operator = "";
                                    operationText = "";
                                    resultEquation = "Error! You cannot divide by zero!";
                                } else {
                                    resultEquation = operate(operator, firstNumber, secondNumber);
                                }
                            }
                            if(operator === "multiply") {
                                resultEquation = operate(operator, firstNumber, secondNumber);
                            }
                            if(operator === "minus") {
                                resultEquation = operate(operator, firstNumber, secondNumber);
                            }
                            if(operator === "plus") {
                                resultEquation = operate(operator, firstNumber, secondNumber);
                            }    
                            if(operator === "percent") {
                                resultEquation = operate(operator, firstNumber, secondNumber);
                            }                            
                            //firstNumber = result;
                            //secondNumber = "";
                            //operator = operation[0].name;
                            //operationText = operation[0].value;
                            result = resultEquation;
                            display.textContent = resultEquation;
                        }
                    } else {
                        if(firstNumber !== "" && operator !== "" && secondNumber !== "" && result !== "") {
                            //state 1 1 1 1
                            console.log("State: 1 1 1 1");
                            //variabelen setten
                            //firstNumber = "";
                            //secondNumber = "";
                            //operator = "";
                            //result = "";
                            //display.textContent = 0;
                            //als er een nummer wordt gedrukt
                            if(isNumber(button.id)){
                                const number = getObject(button.id, numbers);
                                firstNumber = number[0].value;
                                secondNumber = "";
                                operator = "";
                                operationText = "";
                                result = "";
                                display.textContent = firstNumber + operationText + secondNumber;
                            }
                            //als er een operator wordt gedrukt
                            if(isOperator(button.id)){
                                const operation = getObject(button.id, operators);
                                firstNumber = result;
                                secondNumber = "";
                                operator = operation[0].name;
                                operationText = operation[0].value;
                                result = "";
                                display.textContent = firstNumber + operationText + secondNumber;
                            }
                            //als er equals wordt gedrukt

                        } 
                    }
                } 
            }
        }
    })
})

function isNumber(id){
    const filtered = numbers.filter(number => {
        if(number.name === id){
            return true;
        }
    });
    if(filtered.length > 0){
        return true;
    }
    return false;
}

function isOperator(id){
    const filtered = operators.filter(operator => {
        if(operator.name === id){
            return true;
        }
    });
    if(filtered.length > 0){
        return true;
    }
    return false;
}

function getObject(id, array){
    const obj = array.filter(item => {
        if(item.name === id){
            return item;
        }
    });
    return obj;
}

function add(a, b){
    return Number(a) + Number(b);
}

function subtract(a, b){
    return Number(a) - Number(b);
}

function multiply(a, b){
    return Number(a) * Number(b);
}

function divide(a, b){
    return Number(a) / Number(b);
}

function percent(a, b){
    return (Number(a)/100) * Number(b);
}

function operate(operator, firstNumber, secondNumber){
    let result = 0;
    if (operator==="plus") { result = add(firstNumber, secondNumber); }
    if (operator==="minus") { result = subtract(firstNumber, secondNumber); }
    if (operator==="multiply") { result = multiply(firstNumber, secondNumber); }
    if (operator==="divide") { result = divide(firstNumber, secondNumber); }
    if (operator==="percent") { result = percent(firstNumber, secondNumber); }
    return result;
}