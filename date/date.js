//Date => Data é objeto que facilita o uso de data com JS
let data = new Date(); //criar um objeto com base no tempo do sistema
console.log(data.toLocaleDateString()); //mostra a data no formato local
console.log(data.toLocaleTimeString()); //mostra a hora no formato local

let agora = Date.now(); //a daraa/hpra atual em milisegundos
console.log(agora);

let dezMin = 1000 * 60 * 10
let daquiAPouco = agora + dezMin;
console.log(new Date(agora));
console.log(new Date(daquiAPouco));

console.log(new Date(2021, 0, 7))

const btn = document.querySelector("#enviar");

btn.addEventListener("click",() => {
    const dataCampo = document.querySelector("#dataNasc");
    const valor = dataCampo.value;
    const vetorData = valor.split("-").map(n => Number(n));
    const data = new Date(vetorData[0], vetorData[1]-1, vetorData[2]);
    console.log(data);
    window.alert(data);
})
