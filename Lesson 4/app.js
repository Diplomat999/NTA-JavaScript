// Домашнее задание
// Реализовать функцию, которая будет производить математические операции с введеными пользователем числами.
// Технические требования:
// Считать с помощью модального окна браузера два числа.
// Считать с помощью модального окна браузера математическую операцию, которую нужно совершить.
// Сюда может быть введено +, -, *, /.
// Создать функцию, в которую передать два значения и операцию.
// Вывести в консоль результат выполнения функции.

// function getCalc() {
//   let a = +prompt("Введите первое число");
//   let b = +prompt("Введите второе число");
//   let operator = prompt(
//     "Какую математическую операцию необходимо совершить?",
//     "+, -, *, /"
//   );
//   if (operator === "+") {
//     return a + b;
//   }
//   if (operator === "-") {
//     return a - b;
//   }
//   if (operator === "*") {
//     return a * b;
//   }
//   if (operator === "/") {
//     return a / b;
//   }
// }
// console.log(getCalc());



// Необязательное задание продвинутой сложности:
// После ввода данных добавить проверку их корректности. Если пользователь не ввел числа, либо при вводе указал не числа, - спросить оба числа заново (при этом значением по умолчанию для каждой из переменных должна быть введенная ранее информация).


function getCalc() {
    let a = +prompt("Введите первое число", 0);
let b = +prompt("Введите второе число", 0);

while (isNaN(a) || isNaN(b)) {
  a = +prompt("Введите первое корректное число", 0);
  b = +prompt("Введите второе корректное число", 0);
}

let operator = prompt(
  "Какую математическую операцию необходимо совершить?",
  "+, -, *, /"
);

  if (operator === "+") {
    return a + b;
  }
  if (operator === "-") {
    return a - b;
  }
  if (operator === "*") {
    return a * b;
  }
  if (operator === "/") {
    return a / b;
  }
}
console.log(getCalc().toFixed(2));