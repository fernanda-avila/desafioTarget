const prompt = require('prompt-sync')();
const numero= parseInt(prompt('Digite um número: '));

function isFibonacci(num) {
    let a = 0, b = 1, temp;
  
    if (num === 0 || num === 1) {
      return true;
    }
  
    while (b < num) {
      temp = b;
      b = a + b;
      a = temp;
    }
  
    return b === num;
  }
  
  if (isFibonacci(numero)) {
    console.log(numero + " faz parte da sequência de Fibonacci.");
  } else {
    console.log(numero + " não faz parte da sequência de Fibonacci.");
  }
  