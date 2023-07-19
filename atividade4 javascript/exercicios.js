//Escreva um programa que receba um texto e calcule a quantidade de letra de "a". O programa deve considerar maisculas e minusculas.
let texto ="Hoje fui na casa de Ana e jogamos Valorant.";
let numerosDeA = 0;
for(let i=0; i<texto.length;i++){
    if(texto.charAt(i) == "A" || texto.charAt(i) == "a"){
        numerosDeA++;
    }
}
console.log(texto + " Tem " + numerosDeA +" 'A's.");

// Escreva um programa que calcule a raiz quadrada de um número e mostre na tela.
let numero = 121;
console.log(Math.sqrt(numero));

// Escreva um programa que  arredonde um número para o inteiro mais próximo.
let arredondar = 5.2;
console.log(Math.round(arredondar));

// Escreva um programa que  calcule o valor absoluto de um número.
let num = -89;
console.log("O valor absoluto de" + num + " é " + Math.abs(num));

// Escreva um programa que  gere um número aleatório entre 10 e 20.
console.log(Math.floor(Math.random() * (20 - 10 + 1) + 10));

// Arredonde um número para um número específico de casas decimais.
let especifico = 3.1416
console.log(especifico.toFixed(2))

// Escreva um programa que  converta uma string para um número decimal e arredonde para o número inteiro anterior.
num = "43.584585";
console.log(num + " arredondando para o numero anterior e " + Math.floor(Number.parseFloat(num)));

// Verifique se um número é um valor finito, não infinito, NaN ou não.
num = 12;
if(isNaN(num)){
    console.log("Not a Number");
}
else{
    console.log("Number");
}

if(isFinite(num)){
    console.log("Finito");
}
else{
    console.log("Infinito")
}

// Escreva um programa que verifique se a string "ba" contém em outras outra string.
texto = "A batata é muito boa";
if(texto.includes("ba")){
    console.log("Contem 'ba'");
}
else{
    console.log("Não contem 'ba'");
}

// Escreva um programa que  converte uma string para letras maiúsculas e para letras minúsculas e mostre na tela.
console.log()

// Extraia uma parte específica de uma string com base em índices.
console.log("De 0 a 18 tem-se '" + texto.substring(0, 18) + "'");

// Substitua todas as ocorrências de uma substring por outra em uma string.
console.log(texto.replaceAll("jaca", "banana"));

// Remova espaços em branco extras no início e no final e no final de uma string.
console.log(texto.trim());

// Inverta uma string. Utilize o laço for.
let textoInvertido = "";
for(let i = texto.length-1; i >= 0; i--) {
    textoInvertido += texto.charAt(i);
}
console.log(textoInvertido);