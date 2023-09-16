// this is a js file
// Franciele Dörr Dos Santos


//while "enquanto"
//let condicao = true;
/* while (condicao){
//enquanto a condicao for verdadeira,
//as linhas de cód dentro deste bloco,
//serão executadas.

//assim que a condicao for false o LOOP/LAÇO vai PARAR.

} */

//IMPRIMINDO NUMEROS.

// i ++ = i = 1;

//let i = 0
//while (i<10) {
 //   console.log(i)
    
   // i++
//}

//let estomago = 0;
//while (estomago < 100) {
 //   console.log("quero comer mais coxinhas");
 //   estomago = estomago + 10;
//}


//let soma;
//let numero = Number(prompt("digite um numero"));

//while (numero !==0) {
   // soma = soma + numero;
    //numero = Number(prompt("digite um numero"));
//}
//console.log("a soma dos numeros inseridos é:" + soma);



//FOR

//for (let i = 0; i < 10; i++) {
 //   console.log(i)
//}
//let elemento = 0
//const numeros = [14, 67, 89, 15, 23]
//for (let i = 0; i < 5; i++) {
//    const elemento = numero[i]
 //   console.log(elemento)
//}

function encontrarMaiorNumero (arr){
    let maior = arr[0];
    for (let i=0; i < arr.length; i++) {
        if (arr[i] > maior){
            maior = arr[i]
        }
    }
    return "o maior numero é" + maior;
}
const numeros = [11,15,18,14,90,13];
console.log(encontrarMaiorNumero(numeros));



///for...of...(para...cada...) ou of Each

//simplificar a leitura

//const numeross = [14,67,89,15,23]
//for (let numero of numeross){
 //   console.log(numero) 
//}

//ou


//for (const elemento of meuArray){
 //   console.log(elemento);
//}
//meuArray.forEach(elemento => {
   // console.log(elemento);
//});


//ex:

let palavras = ["olá", "amigo", "como", "você", "está?"];
function retornaFraseCompleta (arrayDePalavras) {
    let frase = " ";

  for(let i = 0; i < arrayDePalavras.length; i ++) {
    const elemento = arrayDePalavras[i];
    frase = frase + " " + elemento;
  }
return frase;
}
console.log(retornaFraseCompleta(palavras));
