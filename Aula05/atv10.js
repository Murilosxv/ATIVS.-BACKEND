anoAtual = new Date().getFullYear()
 
livro = {
    título: "Moby Dick",
    autor: "Herman Melville",
    anoDePublicação: 1851,
    gênero: "Aventura/Drama",
    avaliacao: "Muito interessante"
}
livro.idadeDePublicação = anoAtual - livro.anoDePublicação
 
delete livro.avaliacao
 
console.log(livro)