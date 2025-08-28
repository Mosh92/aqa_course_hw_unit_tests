/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];
let vowels = ['a','A','o','O','E','e','i','I','y','Y','u','U']

function sortedByVowels(wordsArr) {
let newWord = wordsArr.toSorted((a,b) => { 
  let countA = a.split("").reduce((sum,el) => vowels.includes(el)?sum+1:sum ,0);
  let countB = b.split("").reduce((sum,el) => vowels.includes(el)?sum+1:sum ,0)
  return countA - countB;
})
return newWord
}
console.log(sortedByVowels(words))

export { sortedByVowels };
