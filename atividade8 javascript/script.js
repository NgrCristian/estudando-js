const vermelho = document.querySelector("#red");
const amarelo = document.querySelector("#yellow");
const verde = document.querySelector("#green");


function sinalVermelho() {
    document.getElementById('red').style.opacity = '1';
    document.getElementById('yellow').style.opacity = '0.3';
    document.getElementById('green').style.opacity = '0.3';
}

function sinalAmarelo() {
    document.getElementById('red').style.opacity = '0.3';
    document.getElementById('yellow').style.opacity = '1';
    document.getElementById('green').style.opacity = '0.3';
}

function sinalVerde() {
    document.getElementById('red').style.opacity = '0.3';
    document.getElementById('yellow').style.opacity = '0.3';
    document.getElementById('green').style.opacity = '1';
}

function trocarAutomaticamente() {
    automatico = setInterval(function() {
        sinalVermelho();
        setTimeout(sinalAmarelo, 1000);
        setTimeout(sinalVerde, 2000);
    }, 3000);
}

function parar() {   
    clearInterval(automatico);
    todas();
}

function todas() {
    document.getElementById('red').style.opacity = '1';
    document.getElementById('yellow').style.opacity = '1';
    document.getElementById('green').style.opacity = '1';
};