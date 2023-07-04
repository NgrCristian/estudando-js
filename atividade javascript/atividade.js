// "ESCREVA UM PROGRAMA QUE VERIFIQUE SE UM NÚMERO É PAR OU ÍMPAR."
const num = 4;     
// decidir o valor do num

let result = (num %2 === 0);
let mensagem = result ? "Par" : "Impar";
console.log("O numero é", mensagem); 




// "FAÇA UM PROGRAMA QUE CALCULE A MÉDIA ARITMÉTICA DE TRÊS NÚMEROS."
const num1 = 2;
const num2 = 6;
const num3 = 1;
// decidir o valor do num1, num2 e num3

let media= ((num1 + num2 + num3)/3);
console.log("A média é",media);
// retorna o valor da media aritmetica do num1, num2 e num3.




// "ESCREVA UM PROGRAMA QUE DETERMINE SE UM NÚMERO É DIVISÍVEL POR 3 E POR 5 AO MESMO TEMPO."
const n = 15;
// decidir o valor do n

let div = ((n%3 === 0) && (n%5 === 0));
let res = div ? "É divisível por 3 e 5" : "Não é divisível por 3 e 5";
console.log(res);
//  retorna se um numero é divisivel por 3 e 5




// "FAÇA UM PROGRAMA QUE CALCULE A ÁREA DE UM TRIÂNGULO COM BASE E ALTURA."
const base= 4;
const altura = 5;
// decidir os valores da base e da altura

let area = ((base*altura)/2)
console.log("O valor da area é", area)
// retorna a area de um triangulo




// "ESCREVA UM PROGRAMA QUE CONVERTA UMA TEMPERATURA DE GRAUS CELSIUS PARA FAHRENHEIT."
const graus = 100;
// decidir o valor dos graus
let conversao = (graus * (9/5)) +32;
console.log(conversao ,"graus fahrenheit")
// retorna a conversao dos graus celsius em graus fahrenheit




// "FAÇA UM PROGRAMA QUE CALCULE O DELTA DAS FUNÇÕES DE SEGUNDO GRAU."
const a = 2;
const b = 3;
const c= 1;
// decidir os valores de a, b e c
let delta = ((b*b) - 4 * a * c);
console.log("O valor de delta é", delta);
// retorna  o valor de delta a partir dos valores a,b e c




// "FAÇA UM PROGRAMA QUE RETORNE SE UMA DETERMINADA PESSOA PODE DIRIGIR, BASEADO NA SUA IDADE (UTILIZE OPERADOR TERNÁRIO)."
const idade = 20;
// decidir o valor da idade
let calculo = (idade >= 18);
let retorno = calculo ? "Pode dirigir" : "Nao pode dirigir";
console.log(retorno);

