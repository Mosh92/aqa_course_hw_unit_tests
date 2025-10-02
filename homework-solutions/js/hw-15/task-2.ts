// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

function getKeyByValue <T extends object, K extends keyof T> ( obj: T, value: T[K]): K | undefined {
const entry = Object.entries(obj).find(([key, val]) => val === value)
return entry? (entry[0] as K):undefined
}

console.log(getKeyByValue({name: 'Sergey', age: 33}, '45'))