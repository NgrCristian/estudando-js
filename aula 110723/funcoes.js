
function somar(n1,n2){
    let soma = n1+n2;
    return soma;
}
let result = somar(30,20);
console.log(result);



function calculadora(n1, n2, op="+" ){
    switch(op){
        case "+":
            return n1+n2;
        case "-":
            return n1-n2;
        case "*":
            return n1*n2;
        case "/":
            return n1/n2;    
    }
    return NaN;
}
console.log(calculadora(5,5,))



function desenho(altura){
    for(let i = 1; i <= altura; i++){
        let linha = "";

    for(let j = 0; j< (altura-i); j++ ){
        linha += " "
    }

    for(let j = 0; j < i; j++){
        linha += "# ";
    }
    console.log(linha);
    }
}
desenho(8)