
let keys = document.querySelector('.calculator-keys');
let numberButtons = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let equal = document.querySelector('.equal-sign');
let total = document.querySelector('.calculator-screen');
let clear = document.querySelector('.clear');
let calculation = [];

// total = calculationTotal;
let firstNumber = [];
let currentOperator = null; 
let secondNumber = [];

numberButtons.forEach(function(elem){
    elem.addEventListener('click', pushNumber)
    checkEqual();
});

operators.forEach(function(elem){
    elem.addEventListener('click', pushOperator)
});

equal.addEventListener('click', calculate);

clear.addEventListener('click', clearOut); 



// operators.addEventListener('click', pushOperator);
 
function pushNumber(digit) {
    alert(digit.target.value);
    console.log(currentOperator);
    // operator = operator.value;
   if(!currentOperator){
       console.log(currentOperator, 'firstNumber')
       firstNumber.push(digit.target.value);
       return total.value = firstNumber.join('');
    
   } else {
    console.log(currentOperator, 'secondNumber')
    secondNumber.push(digit.target.value);
    total.value = secondNumber.join('');
  
    return total.value;

   } 
}


function pushOperator(operator) {
currentOperator = operator.target.value; 
console.log(operator);
alert(currentOperator);
calculation.push(currentOperator); 

console.log(operator);
}

function calculate(equal) {
    alert(equal.target.value);
    calculation.push(equal.target.value);
    console.log(equal.target.value);
    test(firstNumber,currentOperator, secondNumber);
    console.log(test(firstNumber,currentOperator, secondNumber));

}
function test(firstNumber, operator, secondNumber){
    let num1 = parseFloat(firstNumber.join(''));
    let num2 = parseFloat(secondNumber.join(''));
console.log(num1);
console.log(num2);
 
    if (operator == '+') {
        return total.value = num1 + num2;
    } else if (operator == '-'){
        return total.value = num1 - num2;
    } else if (operator == '*'){
         return total.value = num1 * num2;
    }else if (operator == '/'){    
     return total.value = num1 / num2;
    
    }

console.log(total.value);
}

function clearOut() {
    total.value = 0;
    operator = null;
    firstNumber = [];
    secondNumber = []; 
    currentOperator = null;
    console.log(total.value);
    console.log(operator);
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(currentOperator);
}

    function checkEqual(){
        for (let i = 0; i < calculation.length; i++) {
            if (calculation[i] === '=') {
                alert('=');
        }
        console.log(i);
            // more statements
         }
    }

   