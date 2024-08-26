 function maior(a,b,c){
    if (a>b && a>c){
      return  console.log(a,"é o maior número")
    }
    else if (b>c && b>a){
      return  console.log(b,"é o maior número")
    }
    else if (c>a && c>b){
     return   console.log(c,"é o maior número")
    }
    else{
     return   console.log("Temos números com valores iguais")
    }
}
 
maior(11,5,9) 