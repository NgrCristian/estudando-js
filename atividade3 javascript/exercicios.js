// ESCREVA UM PROGRAMA QUE IMPRIMA OS NÚMEROS DE 1 A 20 USANDO UM LOOP FOR.
for(let i= 1; i<= 20; i++){
    console.log(i);
}


console.log("=======================")
// ESCREVA UM PROGRAMA QUE EXIBA OS NÚMEROS DE FIBONACCI ATÉ O DÉCIMO TERMO USANDO UM LOOP WHILE.
let number1 = 0;
let number2 = 1;
let count = 0;

while (count <= 10) {
    console.log(number1);
    const proximoNumber = number1 + number2;
    number1 = number2;
    number2 = proximoNumber;
    count++;
}


console.log("=======================")
// CRIE UM PROGRAMA QUE RECEBA UM NÚMERO E CALCULE A SOMA DE TODOS OS NÚMEROS ÍMPARES ATÉ ESSE NÚMERO USANDO UM LOOP FOR E UMA ESTRUTURA CONDICIONAL IF.
const numero = 10;
let soma = 0;

for (let i = 1; i <= numero; i++) {
    if (i % 2 !== 0) {
    soma += i;
}
}
console.log(soma);


console.log("=======================")
// FAÇA UM PROGRAMA QUE RECEBA UM NÚMERO E EXIBA A TABUADA DESSE NÚMERO USANDO UM LOOP FOR.
const n = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}


console.log("=======================")
// CRIE UM PROGRAMA QUE EXIBA TODOS OS NÚMEROS MÚLTIPLOS DE 7 DE 1 A 100 USANDO UM LOOP FOR E UMA ESTRUTURA CONDICIONAL IF PARA VERIFICAR SE CADA NÚMERO É MÚLTIPLO DE 7.
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}


console.log("=======================")
// ESCREVA UM PROGRAMA QUE RECEBA UM NÚMERO E DESENHE NA TELA UM TRIÂNGULO FORMADO POR "*".
const tamanho = 5;
let linha = "";

for (let i = 0; i < tamanho; i++) {
    linha += " * ";
    console.log(linha);
}


let lado = 5;
let linha = "";
for(let y = 1; y <= lado; y++) {
    linha = "";
    for(let x = 1; x <= lado; x++) {
        if(y == 1 || y == lado || x == 1 || x == lado) {
            linha += "@ ";
        }
        else {
            linha += "  ";
        }
    }
    console.log(linha);
}