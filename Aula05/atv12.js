 anoAtual = new Date().getFullYear()
 
livro = {
    título: "Drácula",
    autor: "Bram Stoker",
    anoDePublicação: 1897,
    gênero: "Horror/Gótico",
    avaliacao: "Ótima leitura"
}
livro.idadeDePublicação = anoAtual - livro.anoDePublicação
 
delete livro.avaliacao
 
console.log(livro)
 
 const pessoa = {
nome: "Bruce Banner",
dataNascimento: "25/01/1980",
carteiraIdentidade: "997776-X",
email: "profbanner@email.com",
telefone: "+552877776666",
cidade: "Cachoeiro de Itapemirim",
estado: "ES"
}
 
pessoa.cpf = "42381893709"
 
pessoa.seguroSocial = "123-45-6789"
 
function relatorio(){
    cpfRelatorio = pessoa.cpf.slice(0,4)
    carteiraIdentidadeRelatorio = pessoa.carteiraIdentidade.slice(0,4)
 
    pessoaRelatorio = pessoa
 
    pessoaRelatorio.cpf = cpfRelatorio
    pessoaRelatorio.carteiraIdentidade = carteiraIdentidadeRelatorio
 
    return console.log(pessoaRelatorio)
}
 
relatorio()