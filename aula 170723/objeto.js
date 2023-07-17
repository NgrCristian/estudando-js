//Objeto = Estrutura que representa um objeto do mundo real(ex. Produto, Pessoa< profissao)
// Objeto pode ser modelado - Classe(começa sempre com letra maiuscula)

class Livro{
    titulo;
    paginas;
    autor;
    isbn;
    alugar = function(){
        console.log("Alugado")
    };
    static isLivro(livro){
        let flag = livro.titulo == undefined;
        return !flag
    }

    constructor(titulo, paginas, autor, isbn){
        this.titulo = titulo;
        this.paginas = paginas;
        this.autor = autor;
        this.isbn = isbn;
    }
}

//Para criar a estrutura fisica do objeto pela classe fazer uma INSTANCIA
let arquiteturaLimpa = new Livro(); // <- instancia

arquiteturaLimpa.titulo = "arquitetura Limpa";
arquiteturaLimpa.autor = "Roberto c.Martinho";
arquiteturaLimpa.paginas = 400;
arquiteturaLimpa.isbn = "978-85-508-0460-6"
console.log(arquiteturaLimpa)

let javaIniciantes = new Livro("Java para iniciante", 500, "herneert", "98453685");
console.log(javaIniciantes)

let livroTeste = new Livro(); // uso do static
console.log(Livro.isLivro(livroTeste))

//Obeto é uma estrutura que representa o objeto no mundo real do nosso codigo.
//Classe - Planta ou o modelo do objeto.
//Caracteristicas - atributos, propriedades
//Construtor é a funcao que gere o objeto fisico
//Instancia é o processo de construir o objeto

//JavaScript ->front
//Java ->Back
const objeto = {}; //cria um objeto sem classe
console.log(objeto);