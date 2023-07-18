const alunos = [
    { nome: 'Rafael', idade: 20, nota: 8.5 },
    { nome: 'Maria', idade: 22, nota: 7.0 },
    { nome: 'Arthur', idade: 19, nota: 9.2 },
    { nome: 'Helena', idade: 18, nota: 9.5 },
    { nome: 'Gustavo', idade: 20, nota: 7.8 },
    { nome: 'Julio', idade: 22, nota: 8.2 }
];

function criaTabela(){
    const tabela = document.querySelector("#tabela");
    for(let aluno of alunos){
        tabela.innerHTML += `
        <tr>
            <td>${aluno.nome}</td>
            <td>${aluno.idade}</td>
            <td>${aluno.nota}</td>
        </tr>
        `;
    }
}

criaTabela();