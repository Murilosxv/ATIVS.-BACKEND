anoAtual = new Date().getFullYear()
 
livro = {
    título: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoDePublicação: 1954,
    gênero: "Fantasia"
}
livro.idadeDePublicação = anoAtual - livro.anoDePublicação
 
console.log("Título:", livro["título"])
console.log("Autor:", livro["autor"])
console.log("Ano de Publicação:", livro["anoDePublicação"])
console.log("Gênero:", livro["gênero"])
console.log("Idade de Publicação:", livro["idadeDePublicação"]) 