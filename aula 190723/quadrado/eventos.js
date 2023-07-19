//Evento -> açao executada pelo usuario (clique,teclar,movimentar o cursor)

//CLICK

//DOUBLE CLICK

//KAYDOWN -> apertar botao

//KAYUP -> soltar o botao

//MOUSEOVER

//MOUSEOUT

//SUBMIT

//CHANGE

//FOCUS

let quadrado = document.querySelector("#quadrado");
console.log({quadrado})

quadrado.onclick = () => {
    quadrado.style.backgroundColor = "#003049";
    // quadrado.style.borderRadius = "100px";
    quadrado.style.transform = "translateY(500px)";
}

quadrado.ondblclick = ()=> {
    quadrado.style.borderRadius = "0px";
    quadrado.style.backgroundColor = "chartreuse";
    quadrado.style.transform = "translateY(-100px)"
}

function changeColorSquare() {
    quadrado.style.backgroundColor="#0d63cb";
}

addEventListener("mouseout", () => {
    quadrado.style.backgroundColor = "#f07167"
})