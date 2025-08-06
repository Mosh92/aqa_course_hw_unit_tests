/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';
let vowels ='aeyuioAEYUIO';
let numVowels = 0;
let numConsonants =0;
for (let i = 0; i < word.length; i++){
    if (vowels.includes(word[i])){
        ++numVowels;
    }
}
numConsonants = word.length - numVowels;
vowelsAndConsonantsResult = `${word} contains ${numVowels} vowels and ${numConsonants} consonants`;
console.log(vowelsAndConsonantsResult);
export { vowelsAndConsonantsResult };
