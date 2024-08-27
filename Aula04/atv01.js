class Carros {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    ligarMotor() {
        this.motorLigado = true;
        console.log("O motor está ligado.");
    }

    desligarMotor() {
        this.motorLigado = false;
        console.log("O motor está desligado.");
    }

    statusMotor() {
        if (this.motorLigado) {
            return "O motor está ligado.";
        } else {
            return "O motor está desligado.";
        }
    }
}

const meuCarro = new Carros("Honda", "Civic", 2024);


console.log(meuCarro.statusMotor()); 


meuCarro.ligarMotor();
console.log(meuCarro.statusMotor()); 


meuCarro.desligarMotor();
console.log(meuCarro.statusMotor()); 
