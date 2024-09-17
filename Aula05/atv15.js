endereco = {
    rua: "Rua ida Zaramella Montini ",
    cidade: "Hortoladia",
    estado: "SP"
}
 
pessoa.endereco = endereco
 
function mostrarInfoPessoa(objeto){
 infoPessoa = {
    nome:"Tipo da variável:" + typeof objeto.nome + "||" + objeto.nome,
    idade: "Tipo da variável:" + typeof objeto.idade + "||" + objeto.idade,
    solteiro: "Tipo da variável:" + typeof objeto.solteiro + "||" + objeto.solteiro,
 }
 if (typeof objeto.hobbies === "object"){
    tipoHobbies = "array"
 }else{
    tipoHobbies = typeof objeto.hobbies
 }
 
infoPessoa.hobbies = "Tipo da variável:" + tipoHobbies + "||" + objeto.hobbies
 
infoPessoa.endereco = objeto.endereco
 
infoPessoa.endereco.rua = "Tipo da variável:" + typeof objeto.endereco.rua + "||" + objeto.endereco.rua
infoPessoa.endereco.cidade = "Tipo da variável:" + typeof objeto.endereco.cidade + "||" + objeto.endereco.cidade
infoPessoa.endereco.estado = "Tipo da variável:" + typeof objeto.endereco.estado + "||" + objeto.endereco.estado
 
 
 return console.log(infoPessoa)
}
 
mostrarInfoPessoa(pessoa)