let string = prompt('Введите числа в массив через запятую');
let arr = string.split(',');
let somearr = arr.filter(item => item % 3 == 0);
console.log(somearr);