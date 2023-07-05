// const altura = 1.59;
// if(altura >=1.6) {
//     console.log("Pode entrar no brinquedo")
// }

// else{
//     console.log("Nao pode entrar no brinquedo")
// }

// let nivelIngles = 3;
// if(nivelIngles == 1){
//     console.log("Nivel Iniciante")
// }

// else if(nivelIngles == 2){
//     console.log("Nivel Basico")
// }

// else if(nivelIngles == 3){
//     console.log("Nivel Intermediario")
// }

// else if(nivelIngles == 4){
//     console.log("Nivel Avançado")
// }

// else if(nivelIngles == 5){
//     console.log("Nivel Fluente")
// }

// else {
//     console.log("Nivel de ingles desconhecido")
// }


// let saldo = 500;
// if(saldo > 100){
//     console.log("Comprar um livro")
// }
// if(saldo > 200){
//     console.log("Comprar um tenis")
// }

// if(saldo > 1000){
//     console.log("Comprar uma bolsa")
// }


// let conseguiuFazerCompra = false;
// let saldo = 250;
// if(saldo > 200){
//     console.log("Fez a compra do tenis")
//     conseguiuFazerCompra = true;
// }
// else {
//     console.log("Sem grana suficiente")
//     conseguiuFazerCompra = false;
// }

// if(conseguiuFazerCompra){
//     console.log("Conseguiu fazer a compra!")
// }

// let num1 = 90;
// let num2 = 120;
// let num3 = 300;

// if(num1 > num2 && num1 > num2){
//     if(num2 > num3){
//         console.log(num1 + ">" + num2 + ">" + num3);
//     }
//     else{
//         console.log(num1 + ">" + num3 + ">" + num2)
//     }
// }

// else if(num2 > num1 && num2 > num3){
//     if(num1 > num3){
//         console.log(num2 + ">" + num1 + ">" + num3);
//     }
//     else{
//         console.log(num2 + ">" + num3 + ">" + num1)
//     }
// }

// else {
//     if(num1 > num2){
//     console.log(num3 + ">" + num1 + ">" + num2)
//     }
//     else{
//         console.log(num3 + ">" + num2 + ">" + num1)
//     }
// }

// let mes = 10;

// if(mes == 1){
//     console.log("Janeiro")
// }
// else if(mes == 2){
//     console.log("Fevereiro")
// }

// else if(mes == 3){
//     console.log("Março")
// }

// else if(mes == 4){
//     console.log("Abril")
// }

// else if(mes == 5){
//     console.log("maio")
// }

// else if(mes == 6){
//     console.log("Junho")
// }

// else if(mes == 7){
//     console.log("Julho")
// }

// else if(mes == 8){
//     console.log("Agosto")
// }

// else if(mes == 9){
//     console.log("Setembro")
// }

// else if(mes == 10){
//     console.log("Outubro")
// }

// else if(mes == 11){
//     console.log("Novembro")
// }

// else if(mes == 12){
//     console.log("Dezembro")
// }

// else {
//     console.log("Não existe esse mês!")
// }

let mes = 13;
switch(mes){
    case 1:
        console.log("janeiro");
        break;
    case 2:
        console.log("fevereiro");
        break;
    case 3:
        console.log("março");
        break;
    case 4:
        console.log("abril");
        break;
    case 5:
        console.log("maio");
        break;
    case 6:
        console.log("junho");
        break;
    case 7:
        console.log("julho");
        break;
    case 8:
        console.log("agosto");
        break;  
    case 9:
        console.log("setembro");
        break; 
    case 10:
        console.log("outubro");
        break;
    case 11:
        console.log("novembro");
        break;
    case 12:
        console.log("dezembro");
        break;

    default:
        console.log("Este mes nao existe!")
        break;
}