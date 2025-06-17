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

const buttoncontainer = document.querySelector(".buttons-container");
let span = "";
let num1, num2 = 0;
let operator = "";
let clickedOperator = false, num1IsSet = false;
buttoncontainer.addEventListener("click", (e) => {
    const isButton = e.target.nodeName === 'INPUT';
    if (!isButton){
        return ;
    }

    if((parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 9) && num1IsSet == false) {
        span += e.target.value;
        console.log(span);
    }
    if(e.target.value == "+" || e.target.value == "-" || e.target.value == "*" || e.target.value == "/") {
        if (clickedOperator == false){
            num1 = parseInt(span);
            span = e.target.value;
            operator = span;
            console.log(span);
            clickedOperator = true;
            num1IsSet = true;
            span = "";
        } else if (clickedOperator == true){
            console.log("only two operands pls");
        }
    }
    if((parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 9) && num1IsSet == true) {
        span += e.target.value;
        console.log(span);
    }
    if(e.target.value == "="){
        num2 = parseInt(span);
        span = operate(num1, operator, num2);
        console.log(span);
        num1 = parseInt(span);
        num1IsSet == true;
        clickedOperator = false;
    }
    if(e.target.value == "clear"){
        num1 = 0;
        num2 = 0;
        span = "";
        operator = "";
        num1IsSet = false;
        clickedOperator = false;
    }
})

