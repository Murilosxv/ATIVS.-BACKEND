calculadora = {
    soma: function(a,b){
        return console.log(a+b)
    },
    subtracao: function(a,b){
        return console.log(a-b)
    },
    multiplicacao: function(a,b){
        return console.log(a*b)
    },
    divisao: function(a,b){
        if(b === 0 ){
            return console.log("Não é possível dividir por 0")
        }else{
            return console.log(a/b)
        }
    },
    calcularMedia: function(array){
        soma = 0
        for(let i = 0; i < array.length; i++){
            soma += array[i]
        }
        media = soma/array.length
        return console.log(media)
    }
}
 
numeros = [1,2,3,4,5,6,7]
calculadora.calcularMedia(numeros) 