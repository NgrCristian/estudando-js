class Pessoa {
    nome;
    idade;
    email;
}

let pessoa1 = new Pessoa();
pessoa1.nome = "Gabriel";
pessoa1.idade = 21;
pessoa1.email ="gabriel@exemple.com";

console.log(pessoa1);


const pessoa2 = {
    nome:"Aline",
    idade: 24,
    email: "aline@example.com"
};

console.log(pessoa2);

const vetor = ["cristian", 18, "cristian@mail.com"];
console.log(vetor[0]);

const objeto = { nome: "cristian", idade: 18, email: "cristian@mail.com"};
console.log(objeto.nome);


const pc = {
    ram: 16,
    disco: 1,
    processador: "i9 intel",
    fonte: "750w",
    placaMae: "gigabyte."
};

const saldo = 5000;

if(saldo>4000){
    pc.placaVideo = "RTX 3080"
}
console.log(pc);

let n1 = 2;
let n2 = n1;
n1= 3;
console.log(n1);
console.log(n2);


// let objeto1 = {
//     nome:"junior", curso:"Javascript"
// };
// let objeto2 = objeto1;
// objeto1.nome ="luiza";
// console.log(objeto1);
// console.log(objeto2);

// forma correta de copiar um objeto -> spread
let objeto1 = {nome:"junior", curso:"Javascript"};
let objeto2 = {...objeto1};
objeto1.nome ="luiza";
console.log(objeto1);
console.log(objeto2);


delete objeto1.nome; // apaga a propriedade nome do objeto
console.log(objeto1);