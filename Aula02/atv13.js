 texto = "radar"
function palindromo (){
    if (texto === texto.split("").reverse().join("")){
        console.log("É palindromo")
    }else{
        console.log("Não é palindromo")
    }
}
palindromo()  