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


keys.addEventListener('click', (event) => {
    console.log({calculator})


    console.log(event)
    console.log(event.target)
    console.log(event.target.value)

    const target = event.target;

    if (!target.matches('button')) {
      return;
    }

    if (target.matches('.plus-minus')){
        return;
    }
  
    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
      return;
    }
  
    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
      return;
    }
  
    if (target.classList.contains('clear')) {
      clear();
      updateDisplay();
      return;
    }
  
    inputDigit(target.value);
    updateDisplay();
  });




// function appendNumber(number){

// }
// function chooseOperation(operation){

// }


const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };


 
    
  function inputDecimal(dot){
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
       
      }
    }

    function handleOperator(nextOperator) {
            const firstOperand = calculator.firstOperand
            const displayValue = calculator.displayValue
            const operator = calculator.operator
           
            const inputValue = parseFloat(displayValue);
        
            if (firstOperand === null && !isNaN(inputValue)) {
              calculator.firstOperand = inputValue;
            }
          
            calculator.waitingForSecondOperand = true;
            calculator.operator = nextOperator;
          }
          
          function compute (firstOperand, secondOperand, operator){
              console.log(firstOperand)
              console.log(secondOperand)
              console.log(operator)
              
              const displayValue = calculator.displayValue;
              console.log(displayValue)

              
            if (operator === '+') {
                console.log('why')
                return firstOperand + parseFloat(secondOperand);
              
            } else if (operator === '-' ){
                return firstOperand - parseFloat(secondOperand); 
            } else if (operator === '*') {
                return firstOperand * parseFloat(secondOperand); 
            } else if (operator === '/') {
                return firstOperand / parseFloat(secondOperand); 
            } else if (operator === 'plus-minus') {
                if (displayValue >= 0){
                    return displayValue;
                } 
               Number(displayValue);
                return  Math.abs(displayValue);
            }
            return secondOperand;
          }
        function clear(){
          calculator.displayValue = '0';
          calculator.firstOperand = null;
          calculator.waitingForSecondOperand = false;
          calculator.operator = null;
          console.log(calculator);
        }

  function inputDigit(digit) {

      const firstOperand = calculator.firstOperand
      const waitingForSecondOperand = calculator.waitingForSecondOperand
      const operator = calculator.operator
const displayValue = calculator.displayValue
      // if digit is an equals sign.... if 
      if (digit === '='){ /// DO MORE
          let value = compute(firstOperand, displayValue , operator);
          calculator.displayValue = value 
          calculator.waitingForSecondOperand = true;
          return calculator.displayValue
      }





      if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
      } else {
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
}


function updateDisplay(){
    const display = document.querySelector('.calculator-screen')
   display.value = calculator.displayValue;
}
  

