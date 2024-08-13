var HpDia = 8;
var DpMes = 25;
var CdaEer = 0.75;
var conPH = 1750; 
var TotalH = HpDia*DpMes
var conTotal = (conPH*TotalH)/1000
var ValorTotal = conTotal*CdaEer
console.log("O Valor total é: " + ValorTotal + " Reais")