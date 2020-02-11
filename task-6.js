let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Enter your number');
    if (isNaN(input) || input == '') {
        break;
    } else {
        numbers.push(+input);
    }
} while (input !== null);

numbers.forEach(element => {
    total += element;
});

console.log('Общая сумма чисел равна', total)