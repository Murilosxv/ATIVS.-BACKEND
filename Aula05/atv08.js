const anoAtual = new Date().getFullYear()
 
livro = {
    título: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    anoDePublicação: 1943,
    gênero: "Ficção/Fábula"
}
livro.idadeDePublicação = anoAtual - livro.anoDePublicação
 
livro.avaliacao = null
 
if(livro.avaliacao === null){
    livro.avaliacao = "Muito Bom"
}else if (livro.avaliacao != null){
    console.log("Esse livro já tem avaliação")
}
 
console.log(livro)