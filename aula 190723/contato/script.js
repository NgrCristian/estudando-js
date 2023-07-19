const email = document.querySelector("#email");
const campos = document.querySelectorAll("input, textarea, select");

function validarEmail(){
    const valor = email.value;
    if(valor.includes("@")){
        email.style.borderColor = "blue";
    }
    else {
        email.style.borderColor = "red";
    }
};
email.addEventListener("keyup", validarEmail);


function validarCampoVazio(evento) {
    const campo = evento.target;
    const valor = campo.value;
    if(valor == ""){
        campo.style.backgroundColor = "red";
    }
    else {
        campo.style.backgroundColor = "blue";
    }
};

for(let campo of campos){
    campo.addEventListener("blur", validarCampoVazio);
}