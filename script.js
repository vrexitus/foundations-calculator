function add(num1, num2){
    let num3 = num1 + num2;
    console.log(num3);
    return num3;
}

function subtract(num1, num2){
    let num3 = num1 - num2;
    console.log(num3);
    return num3;
}

function multiply(num1, num2){
    let num3 = num1 * num2;
    console.log(num3);
    return num3;
}

function divide(num1, num2){
    let num3 = num1 / num2;
    console.log(num3);
    return num3;
}

function operate(num1, operator, num2){
    if (operator == "/" && (num2 == 0 || num1 == 0)){
        return "Can't divide by 0";
    }
    if (operator == "+"){
        return add(num1, num2);
    }else if (operator == "-"){
        return subtract(num1, num2);
    }else if (operator == "*"){
        return multiply(num1, num2);
    }else if (operator == "/"){
        return divide(num1, num2);
    }else {
        return ;
    }
}

const display = document.querySelector(".display");
const defaultDisplay = "0000000000";

function updateDisplay(num){
    display.textContent = num;
}

const buttoncontainer = document.querySelector(".buttons-container");
let span = "";
let num1 = -1, num2 = -1;
let operator = "";
let clickedOperator = false, num1IsSet = false, clickedEquals = false;
buttoncontainer.addEventListener("click", (e) => {
    const isButton = e.target.nodeName === 'INPUT';
    if (!isButton){
        return ;
    }

    if((parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 9) && num1IsSet == false) {
        if(clickedEquals == true){
            span = e.target.value;
        }else{
            span += e.target.value;
        }
        console.log(span);
        updateDisplay(span);
    }
    if(e.target.value == "+" || e.target.value == "-" || e.target.value == "*" || e.target.value == "/") {
        if (clickedOperator == false){
            num1 = parseInt(span);
            span = e.target.value;
            operator = span;
            console.log(span);
            updateDisplay(span);
            clickedOperator = true;
            num1IsSet = true;
            span = "";
        } else if (clickedOperator == true && num2 >= 0){
            console.log("only two operands pls");
        } else if (clickedOperator == true && num2 < 0){
            span = e.target.value;
            operator = span;
            updateDisplay(span);
            span = "";
        }
    }
    if((parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 9) && num1IsSet == true) {
        if(clickedEquals == true){
            span = e.target.value;
        }else{
            span += e.target.value;
        }
        console.log(span);
        updateDisplay(span);
    }
    if(e.target.value == "="){
        if (operator == ""){
            span = "Please enter an operation!";
            updateDisplay(span);
            span = "";
            return ;
        }
        num2 = parseInt(span);
        span = operate(num1, operator, num2);
        console.log(span);
        updateDisplay(span);
        num1 = parseInt(span);
        num2 = -1;
        num1IsSet = true;
        clickedOperator = false;
        clickedEquals = true;
    }
    if(e.target.value == "clear"){
        num1 = 0;
        num2 = 0;
        span = "";
        operator = "";
        num1IsSet = false;
        clickedOperator = false;
        clickedEquals = false;
        updateDisplay(defaultDisplay);
    }
})

