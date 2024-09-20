class Automovel{
    constructor(cor,modelo,tipCombus,qtRodas) {
        this.cor = cor
        this.modelo = modelo
        this.tipCombus = tipCombus
        this.qtRodas = qtRodas
        this.carroLigado = false
        this.vidroAberto = false
    }

    ligarCarro(){
    this.carroLigado = true    
    }

    desligarCarro(){
    this.carroLigado = false    
    }

    abri(){
    this.carroLigado = true    
    }
}