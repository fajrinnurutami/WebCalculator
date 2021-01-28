const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false 
};

function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}

const button = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener('click', function(event) {
    
    //mendapatkan objek elemen yang di klik
    const target = event.target;

    inputDigit(target.innerText);
    updateDisplay()
    });
}