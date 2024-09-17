contaBancaria = {
    titular: "Murilo Silva dos Santos",
    saldo: 50.25,
    depositar: function(deposito){
        return this.saldo += deposito
    },
    sacar: function(saque){
        if(saque>this.saldo){
            return console.log("Você não possui esse dinheiro no seu saldo bancário para fazer o saque")
        }else{
            return this.saldo -= saque
        }
    }
}
 
cliente = {
    nome: "Murilo Silva dos Santos",
    conta: contaBancaria
}
 
function mostrarSaldo(objeto){
    return console.log("Nome do cliente:", objeto.nome, "\nSaldo:",objeto.conta.saldo)
}
 
contaBancaria.depositar(100)
mostrarSaldo(cliente)
 
contaBancaria.sacar(80)
mostrarSaldo(cliente)