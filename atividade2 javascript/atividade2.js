// ESCREVA UM PROGRAMA QUE VERIFIQUE SE UM NÚMERO É POSITIVO, NEGATIVO OU ZERO E EXIBA UMA MENSAGEM CORRESPONDENTE.
let numero = 10;
if (numero>0){
    console.log("É um Numero Positivo!")
}
else if(numero<0){
    console.log("É um Numero Negativo!")
}
else {
    console.log("É Igual a Zero!")
}


// CRIE UM PROGRAMA QUE RECEBA A IDADE DE UMA PESSOA E VERIFIQUE SE ELA É MAIOR DE IDADE (18 ANOS OU MAIS) OU MENOR DE IDADE.
let idade = 17;
if(idade>=18){
    console.log("É maior de idade!")
}
else{
    console.log("É menor de idade!")
}


// ESCREVA UM PROGRAMA QUE RECEBA TRÊS NÚMEROS E DETERMINE QUAL DELES É O MAIOR.
let n1 = 7;
let n2 = 8;
let n3 = 6;
if(n1>n2 && n1>n3){
    console.log("O n1 é o maior!")
}
else if(n2>n1 && n2>n3){
    console.log("O n2 é o maior!")
}
else{
    console.log("O n3 é o maior!")
}


// CRIE UM PROGRAMA QUE RECEBA DOIS NÚMEROS E VERIFIQUE SE SEU PRODUTO É PAR OU ÍMPAR.
let num1 = 5;
let num2 = 1;
let produto = (num1*num2);
if(produto %2 == 0){
    console.log("O produto de num1 com num2 é Par!")
}
else{
    console.log("O produto de num1 com num2 é Impar!")
}


// ESCREVA UM PROGRAMA QUE RECEBA O NOME DE UM DIA DA SEMANA E EXIBA SE É UM DIA ÚTIL OU UM FIM DE SEMANA.
let nome = "domingo";
if(nome = "segunda"){
    console.log("É um dia útil!");
}
else if(nome = "terça"){
    console.log("É um dia útil!");
}
else if(nome = "quarta"){
    console.log("É um dia útil!");
}
else if(nome = "quinta"){
    console.log("É um dia útil!");
}
else if(nome = "sexta"){
    console.log("É um dia útil!");
}
else if(nome = "sabado"){
    console.log("É um final de semana!");
}
else if(nome = "domingo"){
    console.log("É um final de semana!");
}
else{
    console.log("digite nesse formato:segunda, terça, quarta, quinta, sexta, sabado, domingo")
}


// FAÇA UM PROGRAMA QUE RECEBA UM NÚMERO DE 1 A 7 E EXIBA O DIA DA SEMANA CORRESPONDENTE (1 - DOMINGO, 2 - SEGUNDA-FEIRA, ETC.).
let number = 4;
switch(number){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sabado");
        break;

    default:
        console.log("Este numero nao corresponde a um dia da semana!")
        break;
}
