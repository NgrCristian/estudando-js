let nota = 9.6;
let notas = [6.5, 7.8, 9.0];
let times = [ "botafogo", "palmeiras", "flamengo"];
let ativados = [true, false, false, true];
let joao = ["joao", 13, "ensino superior", true]; //ma pratica

let pesos = [85.9, 60.0, 72.5, 83.0, 50.8]
console.log(pesos)
console.log(pesos.length)
console.log(pesos[0])
console.log(pesos[0] + pesos[1])

for(let i = 0; i<pesos.length; i ++) {
    console.log(pesos[i])
}

let operacoes = [
    (n1, n2) => n1 + n2,
    (n1, n2) => n1 - n2,
    (n1, n2) => n1 * n2,
    (n1, n2) => n1 / n2,
];

console.log(operacoes[0](3,4));

console.log(pesos);
pesos[2] = 54.4;
console.log(pesos);

for(let i = 0; i<pesos.length; i ++) {
    pesos[i] *= 2;
}
console.log(pesos);

for(let peso of pesos){
    console.log(peso)
}

for(let indice in pesos){
    console.log(indice);
    console.log(pesos[indice]);
}