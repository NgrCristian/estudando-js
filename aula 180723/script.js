// window.document -> Objeto que representa o documento HTML.
//document.getElementById() -> Busca pelo id do elemento.
//document.getElementsByClassName() -> Busca todos os elementos por classe.
//document.getElementsByTagName() -> Busca todos os elementos pelo nome da tag.
//document.querySelector() -> Busca do elemento com base no seu seletor CSS.


let h1 = document.getElementById("titulo"); 
// console.log(h1);

let paragrafos = document.getElementsByClassName("paragrafo");
// console.log(paragrafos);

let negritos = document.getElementsByTagName("b");
// console.log(negritos);

let inputEmail = document.querySelector("input[type=email]");
// console.log(campoEmail)

let negritoParagrafo = document.querySelector("p b"); // muito aplicado
// console.log(negritoParagrafo);

let negritosParagrafo = document.querySelectorAll("p b");// muito aplicado
// console.log(negritosParagrafo);

// titulo.align = "center";
// titulo.title = "Titulo Principal";
// titulo.style.color = "cyan";
// titulo.style.fontSize = "80px";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "hoje na aula de js conversamos sobre DOM,algo muito importante e legal"
// console.log(paragrafo.innerText); //conteudo textual do elemento
// console.log(paragrafo.innerHTML); //conteudo textual do elemento

//uso de classes com js
let caixa = document.querySelector("#informe");
caixa.classList.remove("mensagem"); //remove uma classe
caixa.classList.add("atencao"); // adiciona uma classe
caixa.classList.toggle("atencao") // adiciona se nao existe
caixa.classList.toggle("atencao") // remove se existe
console.log(caixa)