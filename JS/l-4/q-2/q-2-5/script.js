'use strict'
let dec = 0.1;
let km = 1000;
let m = 1;
let mm = 0.001;
let sm = 0.01;
let l = +prompt("Введите длинну");
let n = prompt("Введите единицу измерения");
if (n == "дециметр" || n == "Дециметр" || n == "дециметры" || n == "Дециметры" || n == "дец" || n == "Дец") {
  l = l * dec;
  alert(`${l} метров`);
} else
if (n == "километр" || n == "Километр" || n == "километры" || n == "Километры" || n == "км" || n == "Км") {
  l = l * km;
  alert(`${l} метров`);
} else
if (n == "метр" || n == "Метр" || n == "метры" || n == "Метры" || n == "м" || n == "М") {
  l = l * m;
  alert(`${l} метров`);
} else
if (n == "миллиметр" || n == "Миллиметр" || n == "миллиметры" || n == "Миллиметры" || n == "мм" || n == "Мм") {
  l = l * mm;
  alert(`${l} метров`);
} else
if (n == "санциметр" || n == "Санциметр" || n == "санциметры" || n == "Санциметры" || n == "см" || n == "См") {
  l = l * sm;
  alert(`${l} метров`);
} else alert("Вы что-то ввели неправильно");
