anoAtual = new Date().getFullYear()
 
livro = {
    título: "Academia",
    autor: "Murilo Silva dos Santos",
    anoPublicacao: 2019,
    genero: "Esportes"
}
 
livro.idadePublicao = anoAtual - livro.anoPublicacao
 
mostrarDetalhes = livro
 
console.log(mostrarDetalhes) 