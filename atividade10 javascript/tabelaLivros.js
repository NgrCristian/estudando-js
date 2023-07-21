import livros from './livros.js';

function exibirTabela() {
    const tabelaLivros = document.getElementById('tabelaLivros');

    const tbody = tabelaLivros.getElementsByTagName('tbody')[0];

    tbody.innerHTML = '';

    for (const livro of livros) {
        const newRow = tbody.insertRow();

        const titleCell = newRow.insertCell();
        titleCell.textContent = livro.titulo;

        const authorCell = newRow.insertCell();
        authorCell.textContent = livro.autor;

        const yearCell = newRow.insertCell();
        yearCell.textContent = livro.anoPublicacao;

        const genreCell = newRow.insertCell();
        genreCell.textContent = livro.genero;
    }
}

window.addEventListener('load', exibirTabela);