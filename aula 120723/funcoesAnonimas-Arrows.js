
// function somar (n1, n2) {
//     let soma = n1 + n2;
//     return soma;
// }

// function dividir(num, den) {
//     if (den == 0) {
//         console.log("Impossivel divir um valor por 0 !!")
//         return;
//     }
//     else {
//         let divisao = (num/den);
//         return divisao;
//     }
// }
// console.log(dividir(10,2))


//callback -> funçao que e passada como parametro de outra funçao.

// function requisicaoBanco(callbackError) {
//     for(let i = 0; i < 100000000000; i++){ // requisição feita para o servidor
//         if(i === 1000000){ // aqui gerou um erro
//         callbackError()
//         }
//     }
// }

// function erro(){
//     console.log("DEU RUIM !!!");
// }

// requisicaoBanco(erro);




//FUNÇÃO ANONIMA
// function teste(){
//     console.log("HELLO!")
// }

// setTimeout(function() {
//     console.log("HELLO!");
// }, 3000)

// setInterval(teste, 20000);




//Arrow functions -> funcoes de seta -> funcoes anonimas

// setTimeout(function(){
//     console.log("SetTimeout com funcao anonima");
// }, 2000);

// setTimeout(() => {
//     console.log("SetTimeout com funcao arrow");
// }, 2000);

// (resultado, requisicao) => {
//     console.log(resultado, requisicao);
//     return 0;
// }


// function teste(callback){
//     let valor = callback(130);
// }

// function callback(numero){
//     return (2*numero);
// }

// teste(callback);

// function vezes2(number){
//     return (number *2);
// }

// teste(vezes2);



function teste(callback) {
    let valor = callback(130);
    console.log(valor);
}
teste(function(number) {
    return (number *2);
});

teste((numero) => {
    return (numero*2);
});

teste(numero => (numero*2))

