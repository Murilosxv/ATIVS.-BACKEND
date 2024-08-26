let valorsaldo = 50;
let saque = 15;
let deposito = 50;

function saquesaldo(valorsaldo, saque) {
    return valorsaldo - saque;
}

let resultado1 = saquesaldo(valorsaldo, saque);

valorsaldo = resultado1 + deposito;

console.log('Saldo final:', valorsaldo);
