//Desafio 2 - Programação Web

//1. Cadastro de Frutas
// * Peça ao usuário que informe 3 frutas, uma por vez
// * Armazene cada resposta em um array
// * Mostre todas as frutas numa única linha, separadas por vírgula

const frutas = [];
for (let i = 0; i < 3; i++) {
    const fruta = prompt("Informe uma fruta:");
    frutas.push(fruta);
}
alert("Frutas cadastradas: " + frutas.join(", "));
console.log("Frutas cadastradas: " + frutas.join(", "));

//2. Removendo filmes da lista
// * Comece com um array contendo 5 títulos de filmes.
// * o Remova o primeiro e o último elemento (use shift() e pop()).
// * o Exiba os títulos restantes como uma lista numerada.

const filmes = ["O Senhor dos Anéis", "Harry Potter", "Star Wars", "Matrix", "Jurassic Park"];
filmes.shift(); // Remove o primeiro elemento
for (let i = 0; i < 1; i++) {
    filmes.pop(); // Remove o último elemento
    filmes.unshift(); // Remove o primeiro elemento
}
alert("Filmes restantes:\n" + filmes.map((filme, index) => `${index + 1}. ${filme}`).join("\n"));
console.log("Filmes restantes:\n" + filmes.map((filme, index) => `${index + 1}. ${filme}`).join("\n"));

//3. Adicionando amigos
// * Tenha um array com alguns nomes de amigos
// * o Use unshift() para inserir um novo nome no início e push() para outro no final
// * o Apresente o array completo depois das inserções

const amigos = ["João", "Maria", "Pedro"];
for (let i = 0; i < 2; i++) {
    amigos.pop(); // Remove o último elemento
}
//adicionando amigos
amigos.unshift("Lucas"); // Adiciona "Lucas" no início
amigos.push("Ana"); // Adiciona "Ana" no final
alert("Amigos:\n" + amigos.join(", "));
console.log("Amigos:\n" + amigos.join(", "));

//4. Inserção personalizada com splice()
// * Defina um array inicial com pelo menos 3 nomes
// * o Pergunte ao usuário uma posição (índice) e um novo nome
// * o Insira esse nome na posição indicada usando splice() e exiba o array atualizado
const nomes = ["Carlos", "Ana", "Pedro"];
const posicao = parseInt(prompt("Informe a posição (índice) para inserir um novo nome:"));
const novoNome = prompt("Informe o novo nome:");
nomes.splice(posicao, 0, novoNome); // Insere o novo nome na posição indicada
for (let i = 0; i < 1; i++) {
    nomes.pop(); // Remove o último elemento
    nomes.unshift(); // Remove o primeiro elemento
}
alert("Nomes atualizados:\n" + nomes.join(", "));
console.log("Nomes atualizados:\n" + nomes.join(", "));

//5. Objeto livro - Criação e exibição
// * Crie um objeto livro com as propriedades titulo, autor e ano.
// * o Mostre cada propriedade do objeto como um par “chave: valor” (pode usar parágrafos ou lista).
const livro = {
    titulo: "harry potter",
    autor: "J.K. Rowling",
    ano: 1997
};
alert(`Título: ${livro.titulo}\nAutor: ${livro.autor}\nAno: ${livro.ano}`);
console.log(`Título: ${livro.titulo}\nAutor: ${livro.autor}\nAno: ${livro.ano}`);

// 6. Atualizando Propriedade de Objeto
// * A partir do objeto livro criado, altere seu ano para um novo valor.
// * o Exiba novamente todas as propriedades, evidenciando o novo ano.
const novoAno = parseInt(prompt("Informe o novo ano:"));
livro.ano = novoAno; // Atualiza o ano
alert(`Título: ${livro.titulo}\nAutor: ${livro.autor}\nAno: ${livro.ano}`);
console.log(`Título: ${livro.titulo}\nAutor: ${livro.autor}\nAno: ${livro.ano}`);

//7. Listando Propriedades com for…in
// * o Acrescente ao livro uma propriedade extra editora.
// * o Use um loop for…in para percorrer todas as chaves do objeto e mostrar “chave: valor” dinamicamente.
const editora = prompt("Informe a editora:");
livro.editora = editora; // Adiciona a propriedade editora
for (const chave in livro) {
    alert(`${chave}: ${livro[chave]}`);
    console.log(`${chave}: ${livro[chave]}`);
}

//8. Filtrando Números Pares
// * o Comece com um array de números (por exemplo, 1 a 10).
// * o Use filter() para criar um novo array apenas com os números pares.
// * o Exiba o resultado separado por vírgula.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter((numero) => numero % 2 === 0); // Filtra os números pares
alert("Números pares: " + numerosPares.join(", "));
console.log("Números pares: " + numerosPares.join(", "));

//9. Transformação com map()
// * o Tenha um array de palavras em minúsculas.
// * o Use map() para criar outro array onde cada palavra esteja em maiúsculas.
// * o Mostre ambas as listas (antes e depois) para comparação.
const palavrasMinusculas = ["sol", "lua", "estrela"];
const palavrasMaiusculas = palavrasMinusculas.map((palavra) => palavra.toUpperCase()); // Transforma em maiúsculas
alert("Palavras em minúsculas: " + palavrasMinusculas.join(", ") + "\nPalavras em maiúsculas: " + palavrasMaiusculas.join(", "));
console.log("Palavras em minúsculas: " + palavrasMinusculas.join(", ") + "\nPalavras em maiúsculas: " + palavrasMaiusculas.join(", "));
