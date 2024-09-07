const prompt = require('prompt-sync')();
const palavra = prompt('Digite uma palavra: ');

function contarA(palavra) {

    const texto = palavra.toLowerCase();
  
    const quantidade = (texto.match(/a/g) || []).length;
  
    const existe = quantidade > 0;
  
    return {
      existe: existe,
      quantidade: quantidade
    };
  }
  
  const resultado = contarA(palavra);
  
  if (resultado.existe) {
    console.log("A letra 'a' (ou 'A') aparece " + resultado.quantidade + " vez(es) na string.");
  } else {
    console.log("A letra 'a' (ou 'A') não aparece na string.");
  };
  