// let button1 = document.querySelector('button[value="1"]');
// let button2 = document.querySelector('button[value="2"]');
// let button3 = document.querySelector('button[value="3"]');
// let button4 = document.querySelector('button[value="4"]');
// let button5 = document.querySelector('button[value="5"]');
// let button6 = document.querySelector('button[value="6"]');
// let button7 = document.querySelector('button[value="7"]');
// let button8 = document.querySelector('button[value="8"]');
// let button9 = document.querySelector('button[value="9"]');
// let button0 = document.querySelector('button[value="0"]');
// let buttonClear = document.querySelector('button[value="clear"]');
// let buttonPM = document.querySelector('button[value="plus-minus"]');
// let buttonPercent = document.querySelector('button[value="percent"]');
// let buttonOperator = document.querySelector('button[value="/"]');
// let buttonPlus = document.querySelector('button[value="+"]');
// let buttonDecimal = document.querySelector('button[value="."]');
// let buttonEqual = document.querySelector('button[value="="]');
// let numberButtons = document.querySelectorAll('.number');
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
        return total.value = secondNumber.join('');
   }
   
   //check later
    // calculation.push((digit.target.value));

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
    // clear total.value, operator, firstNumber, secondNumber
}

//    calculation.forEach(function(num1, operator, num2){
//        console.log(num1);
// if (calculation.target === '+'){
//     total.value = num1 + num2;
// } else if (operator === '-'){
//     return num1 - num2;
// } else if (operator === '*'){
//     return num1 * num2;
// } else if (operator === '/'){
//     return num1 / num2;
// }


   


    
/// check this 

    function checkEqual(){
        for (let i = 0; i < calculation.length; i++) {
            if (calculation[i] === '=') {
                alert('=');
        }
        console.log(i);
            // more statements
         }
    }

// console.log(calculation.push([numberButtons.value], [operator.value]));
// console.log(calculation.push(keys.value));



















// keys.addEventListener('click', (event) => {
//     console.log({calculator})

    
//     console.log(event)
//     console.log(event.target)
//     console.log(event.target.value)

//     const target = event.target;

//     if (!target.matches('button')) {
//       return;
//     }

//     if (target.classList.contains('.plus-minus')){
//         plusMinus();
//         updateDisplay();
//         return;
//     }
  
//     if (target.classList.contains('operator')) {
//         handleOperator(target.value);
//         updateDisplay();
//       return;
//     }
  
//     if (target.classList.contains('decimal')) {
//         inputDecimal(target.value);
//         updateDisplay();
//       return;
//     }
  
//     if (target.classList.contains('clear')) {
//       clear();
//       updateDisplay();
//       return;
//     }
  
//     inputDigit(target.value);
//     updateDisplay();
//   });




// // function appendNumber(number){

// // }
// // function chooseOperation(operation){

// // }


// const calculator = {
//     displayValue: '0',
//     firstOperand: null,
//     waitingForSecondOperand: false,
//     operator: null,
//     plusMinus: null,

//   };


 
    
//   function inputDecimal(dot){
//     if (!calculator.displayValue.includes(dot)) {
//         calculator.displayValue += dot;
       
//       }
//     }

//     function plusMinus(){
//       var newValue = parseFloat(calculator.displayValue);
//         if (newValue >= 0) {
//            calculator.displayValue = newValue + -1;
//           }
//         }


//     function handleOperator(nextOperator) {
//             const firstOperand = calculator.firstOperand
//             const displayValue = calculator.displayValue
//             const operator = calculator.operator
            
           
//             const inputValue = parseFloat(displayValue);
        
//             if (firstOperand === null && !isNaN(inputValue)) {
//               calculator.firstOperand = inputValue;
//             }
          
//             calculator.waitingForSecondOperand = true;
//             calculator.operator = nextOperator;
//           }
          



//           
//             } else if (operator === '/') {
//                 return firstOperand / parseFloat(secondOperand); 
//              }
//             //  else if (operator === 'plus-minus') {
//             //     if (displayValue >= 0){
//             //         return displayValue;
//             //         console.log(displayValue);
//             //     } 
                
//             //     return  displayValue * -1;
//             // }
//             return secondOperand;
//           }



//         function clear(){
//           calculator.displayValue = '0';
//           calculator.firstOperand = null;
//           calculator.waitingForSecondOperand = false;
//           calculator.operator = null;
//           console.log(calculator);
//         }




//   function inputDigit(digit) {

//       const firstOperand = calculator.firstOperand
//       const waitingForSecondOperand = calculator.waitingForSecondOperand
//       const operator = calculator.operator
// const displayValue = calculator.displayValue
//       // if digit is an equals sign.... if 
//       if (digit === '='){ /// DO MORE
//           let value = compute(firstOperand, displayValue , operator);
//           calculator.displayValue = value 
//           calculator.waitingForSecondOperand = true;
//           return calculator.displayValue
//       }


//       if (waitingForSecondOperand === true) {
//         calculator.displayValue = digit;
//         calculator.waitingForSecondOperand = false;
//       } else {
//       calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
//   }
// }




// function updateDisplay(){
//     const display = document.querySelector('.calculator-screen')
//    display.value = calculator.displayValue;
// }
  

