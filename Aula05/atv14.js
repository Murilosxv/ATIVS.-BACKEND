// Exercício 14
pessoa = {
    nome: "Murilo Silva dos Santos",
    idade: 18,
    solteiro: true,
    hobbies: ["Futebol","Academia","Programação","Cozinhar"]
}
 
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
 
 return console.log(infoPessoa)
}
 
