// Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
// n + nn + nnn, где n не перемножаются, а конкатенируются

const n = 7;
const nn = String(n) + String(n);
const nnn = String(n)+ String(n) + String(n);
const sum_n = Number(n) + Number(nn) + Number(nnn);
console.log(sum_n);