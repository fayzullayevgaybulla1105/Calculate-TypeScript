"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    // console.log(question);
    var firstStr = readline_sync_1.question('enter first number:\t');
    var operator = readline_sync_1.question("enter operator:\t\t");
    var secondStr = readline_sync_1.question('enter second number:\t');
    // console.log(firstStr, operator, secondStr);
    // console.log(oper);
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    // console.log(validInput);
    if (validInput) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        // console.log(firstNum, secondNum);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('\n invalid input!!!\n');
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    // console.log(maybeNum);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
