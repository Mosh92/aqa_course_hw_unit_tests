/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  return arrays.reduce((result, array) => [...result, ...array], []);
}
mergeArrays([1,2], [3,4], [5,6]);
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
const str = sentence.split(" ").filter(el => el!= '')
.map((el, index) => index>0?(el[0].toUpperCase() + el.slice(1).toLowerCase()):el.toLowerCase())
.join("_");
  return str
}
console.log(devideBy('I  am super engineer'))
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let prev = 0;
  let current = 1;
  if (n>1){
    for(let i=2; i<=n; i++){
    const next = prev + current;
    prev = current;
    current = next;
  }
  return current;
  }
}
console.log(fibonacci(8))

export { mergeArrays, fibonacci, devideBy };

