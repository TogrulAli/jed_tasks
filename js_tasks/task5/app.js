let num1 = Number(prompt('Enter the first number'));
let num2 = Number(prompt('Enter the second number'));
let num3 = prompt('Enter the third number');
if (num1 >= num3 && num1 >= num2) {
    console.log('biggest is num1')
} else if (num2 >= num1 && num2 >= num3) {
    console.log('biggest is num2')
} else {
    console.log('biggest is num3')
}