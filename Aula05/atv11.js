anoAtual = new Date().getFullYear()
 
livro = {
    título: "Frankenstein",
    autor: "Mary Shelley",
    anoDePublicação: 1818,
    gênero: "Ficção Científica/Gótico"
}
livro.idadeDePublicação = anoAtual - livro.anoDePublicação
 
livro.gênero = "Aventura"
 
console.log(livro) 