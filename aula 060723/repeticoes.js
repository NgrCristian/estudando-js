// // console.log(1)
// // console.log(2)
// // ...
// // console.log(10)

// let numero 
// for(numero = 0 ; numero < 10 ; numero++){
//     console.log(numero);
// }

// console.log("=================")
// for(let numero = 0 ; numero < 10 ; numero+=2){
//     console.log(numero);
// }

// console.log("=================")
// let number 
// for(number = 10 ; number > 0 ; number= number-1){
//     console.log(number)
// }

// for (let numero = 0 ;numero <100 ; numero ++){
//     console.log(numero)
// }

// let n = 0;
// while(n<17){ 
//     console.log(n);
//     n++;
// }

let num = 80;
let ePrimo = true;
for(let i = 2; i< num; i++) {
    if(num % i == 0){
        ePrimo = false
    }
}

if(ePrimo){
    console.log("É primo!")
}
else {
    console.log("Não é primo!")
}