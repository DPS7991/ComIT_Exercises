alert('Enter two numbers to see if the first is greater than the second');
let firstNumber = Number(prompt('Enter the first number'));
let secondNumber = Number(prompt('Enter the second number'));

let message;

if (firstNumber > secondNumber) {
    message = 'First number is greater';
} else if (firstNumber < secondNumber) {
    message = 'First number is lesser';
} else if (firstNumber == secondNumber) {
    message = 'Both numbers are the same!';
}

alert(message);