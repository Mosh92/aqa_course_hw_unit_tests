// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль
// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
//   Обработайте промис методом .catch и выведите результат его резолва в консоль
// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then
// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then
// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

1
function delayTwoSeconds(callback){
    setTimeout(callback , 2000)
}
delayTwoSeconds(()=> console.log('Hi'))

//2
const promise1 = new Promise((resolve, reject) => {
    resolve(1)
})
promise1.then((num)=> console.log(num))

//3
const promise2 = new Promise((resolve, reject)=>{
    reject('Promise failed')
})
promise2.catch((reject) => console.log(reject))

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
function promiseNumber(num) {
  const p = new Promise((res, rej) => {
    res(num);
  });
  return p;
}

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then
const arrayP = [promiseNumber(1), promiseNumber(2), promiseNumber(3)];

Promise.all(arrayP).then((rez) => rez.forEach((r) => console.log(r)));

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then

Promise.allSettled(arrayP).then((rez) => rez.forEach((r) => console.log(r)));

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

async function hendleAll(arrayP) {
  try {
    Promise.all(arrayP).then((rez) => rez.forEach((r) => console.log(r)));
  } catch (error) {
    console.error(error.message);
  }
}
async function hendleAllSettled(arrayP) {
  try {
    Promise.allSettled(arrayP).then((rez) => rez.forEach((r) => console.log(r)));
  } catch (error) {
    console.error(error.message);
  }
}

hendleAll(arrayP)
hendleAllSettled(arrayP)