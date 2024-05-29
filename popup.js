document.getElementById('btn1').addEventListener('click', function() { appendNumber(1); });
document.getElementById('btn2').addEventListener('click', function() { appendNumber(2); });
document.getElementById('btn3').addEventListener('click', function() { appendNumber(3); });
document.getElementById('btn4').addEventListener('click', function() { appendNumber(4); });
document.getElementById('btn5').addEventListener('click', function() { appendNumber(5); });
document.getElementById('btn6').addEventListener('click', function() { appendNumber(6); });
document.getElementById('btn7').addEventListener('click', function() { appendNumber(7); });
document.getElementById('btn8').addEventListener('click', function() { appendNumber(8); });
document.getElementById('btn9').addEventListener('click', function() { appendNumber(9); });
document.getElementById('btn0').addEventListener('click', function() { appendNumber(0); });
document.getElementById('btnAdd').addEventListener('click', function() { setOperation('+'); });
document.getElementById('btnSubtract').addEventListener('click', function() { setOperation('-'); });
document.getElementById('btnMultiply').addEventListener('click', function() { setOperation('*'); });
document.getElementById('btnDivide').addEventListener('click', function() { setOperation('/'); });
document.getElementById('btnClear').addEventListener('click', clearDisplay);
document.getElementById('btnEquals').addEventListener('click', calculate);

let operand1 = '';
let operand2 = '';
let operation = '';

function appendNumber(number) {
    if (operation === '') {
        operand1 += number;
        updateDisplay(operand1);
    } else {
        operand2 += number;
        updateDisplay(operand2);
    }
}

function setOperation(op) {
    if (operand1 !== '' && operand2 !== '') {
        calculate();
    }
    operation = op;
    updateDisplay(operation);
}

function clearDisplay() {
    operand1 = '';
    operand2 = '';
    operation = '';
    updateDisplay('');
}

function calculate() {
    let result;
    switch (operation) {
        case '+':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
    }
    updateDisplay(result);
    operand1 = result.toString();
    operand2 = '';
    operation = '';
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}