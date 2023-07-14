const nums = [ 6, 9, 0, 3, 8, 1, 4, 2, 5, 7, 7];
console.log(nums);

nums.push(4); //adiciona valor ao final do vetor
console.log(nums);

nums.unshift(9); //adiciona valor no inicio do vetor
console.log(nums);

nums.pop(); //remove um elemento do final do vetor
console.log(nums);

nums.shift(); //remove um elemento do inicio do vetor
console.log(nums);

let juncao = nums.join(", "); //fazer a juncao dos elementos do vetor
console.log(juncao);

let vetor2 = [5, 6, 7];
let vetor3 = nums.concat(vetor2); //junta dois vetores em um
console.log(vetor3)

nums.push(100, 101, 1000, 110);
console.log(nums.sort()); //ordena o vetor na ordem alfabetica

const nomes = ["junior", "maria", "joao", "diego", "luan", "adriano", "beatriz"];
console.log(nomes.sort());
console.log(nomes.reverse()); //ordena o vetor na ordem reversa

console.log(nums.reverse());

console.log(nums.includes(10)); //pesquisar informaçao no vetor

console.log(nums.fill(7, 2, 4)); //preencher com 7 de 2 a 4-1(3)

console.log(nums.indexOf(3)); // mostra a posicao a partir do indice

console.log(nums);
console.log(nums.splice(6, 3)); //6= indice, 3= quantidade de numeros que serao removidos
console.log(nums);

console.log(nums.slice(2, 4)); // recorta um vetor do indice 2 ao indice 4-1(3)

nums.forEach(num => console.log(num))

console.log(nums.reduce((acumulador, num) => acumulador + num), 0); //soma todos os numeros
console.log(nums.reduce((acumulador, num) => acumulador - num), 0); //subtrai todos os numeros
//sendo o zero o primeiro para ser usado nas operacoes, se remove-lo o primeiro sera o primeiro indice do vetor

console.log(nums.map(num =>num * 2)); //multiplica TODOS os valores do vetor por 2

console.group(nums.find(num => num > 8)); //retorna apenas o primeiro valor que corresponde a condicao

console.log(nums.filter(num => num> 10)); //retorna um vetor correspondente a condicao

//STRING COMO VETOR:
let nome = "cristian";
let idade = 18;
let mensagem = `Nome:${nome}\nIdade:${idade}`  //interpolacao
console.log(mensagem)

console.log(nome[2]);

