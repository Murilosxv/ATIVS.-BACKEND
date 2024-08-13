var peso = 130;
var altura = 1.8;
var IMC = peso/(altura*altura)
console.log(IMC)
if (IMC < 18.5) {
    console.log("Magreza");
}
else if (IMC > 18.5 && IMC <24.9) {
    console.log("Normal");
}
else if (IMC > 25 && IMC <29.9) {
    console.log("Sobrepeso");
}
else if (IMC > 30 && IMC <39.9) {
    console.log("Obesidade");
}
else if (IMC > 40) {
    console.log("Obesidade Grave");
}