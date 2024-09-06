// 모드 전환
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    let modeButton = document.getElementById('mode-toggle');

    if (document.body.classList.contains('dark-mode')) {
        modeButton.textContent = 'Light Mode';
    } else {
        modeButton.textContent = 'Dark Mode';
    }
}

let display = document.getElementById('display');
let currentOperation = '';
let firstOperand = '';
let shouldResetDisplay = false;

// 디스플레이에 숫자 추가
function appendNumber(number) {
    if (shouldResetDisplay) {
        display.value += number;
        shouldResetDisplay = false;
    } else {
        display.value += number;
    }
}

// 연산자 선택
function chooseOperation(operation) {
    if (currentOperation && !shouldResetDisplay) {
        calculateResult();
    }
    
    if (display.value === '') return;

    if (!shouldResetDisplay) {
        firstOperand = display.value;
        display.value += operation;
    }
    
    currentOperation = operation;
    shouldResetDisplay = true;
}

// 초기화
function clearDisplay() {
    display.value = '';
    currentOperation = '';
    firstOperand = '';
    shouldResetDisplay = false;
}

// 연산을 계산 후 결과 디스플레이에 표시
function calculateResult() {
    if (!currentOperation) return;


    let operationIndex = display.value.lastIndexOf(currentOperation);
    let secondOperand = display.value.substring(operationIndex + 1);
    
    if (!secondOperand) return;

    let result;
    // 계산
    switch (currentOperation) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }

    // 결과 디스플레이에 표시 & 상태 초기화
    display.value = result;
    currentOperation = '';
    firstOperand = result;
    shouldResetDisplay = false;
}