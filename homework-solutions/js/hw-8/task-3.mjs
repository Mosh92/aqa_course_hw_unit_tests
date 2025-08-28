/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: 
  const arr = [5,2,7,3,8,1,6] //4
*/
  //const arr = [5,2,7,3,8,1,6] //4
const arr = [1, 2, 3, 4]
function findMissingNumber(numbers) {
  let min = 1;
  const sorted = numbers.toSorted((a, b) => a - b);
  const foundIndex = sorted.findIndex((el, index) => el !== min + index);
  return foundIndex===-1?min + sorted.length : min + foundIndex;
}
console.log(findMissingNumber(arr))
export { findMissingNumber }
