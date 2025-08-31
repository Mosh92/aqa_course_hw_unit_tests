/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
if (typeof word !== 'string'){
  return false
}
  let newWord = word.split("").reverse().join("")
  return (newWord.toLowerCase() === word.toLowerCase())
}
console.log(isPalindrom('потоп'))
/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if(sentence == "" || typeof sentence !== 'string'){
    return [];
  } else{
  let newSentence = sentence.split(" ").map(el => el.length)
  let maxNumber = Math.max(...newSentence)
  return sentence.split(" ").filter(el => el.length === maxNumber)
  //.join(" ")
}}
console.log(findLongestWords('Я люблю собак и котов'))

export { isPalindrom, findLongestWords };
