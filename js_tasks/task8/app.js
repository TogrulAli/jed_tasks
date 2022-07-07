let number1 = Number(prompt('Enter the first number'));
let operator = prompt('Enter operator')
let number2 = Number(prompt('Enter the second number'));
switch(operator){
case '+': 
result = number1 + number2;
break;
case '-': 
result = number1 - number2
break;
case '*': 
result = number1 * number2
break;
case '/': 
result = number1 / number2
break;
default: 
console.log('not found')
break;
}
console.log(`${result}`)