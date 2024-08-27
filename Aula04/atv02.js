class pessoa {
    constructor(nome, idade, profissão, salário){
        this.nome = nome;
        this.idade = idade;
        this.profissão = profissão;
        this.salário = salário;
    }
    infotrabalho(nomeempresa, horatrabalhado) {
        console.log("Trabalha:", nomeempresa, "\nHoras trablhadas:",horatrabalhado)
    }
    
}


const infopessoa = new pessoa("Sabriny", "17","Analista de dados", "4.000");

infopessoa.infotrabalho("Senai","6");
