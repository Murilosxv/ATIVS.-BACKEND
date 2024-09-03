let clinicaveterinária = [];

function addAnimais(nome) {
    clinicaveterinária.push(nome);
}

function RemoAnimais() {
    if (clinicaveterinária.length > 0) {
        const animalRemovido = clinicaveterinária.shift(); 
        console.log(`Animal removido: ${animalRemovido}`); 
    } else {
        console.log('Fila está vazia, não tem animais para remover');
    }
}

addAnimais('Cachorro');
addAnimais('Gato');
addAnimais('Tartaruga');

console.log('Lista de animais na clínica:', clinicaveterinária);

RemoAnimais(); 
console.log('Lista de animais na clínica após remoção:', clinicaveterinária);

RemoAnimais(); 
console.log('Lista de animais na clínica após remoção:', clinicaveterinária);

RemoAnimais(); 
console.log('Lista de animais na clínica após remoção:', clinicaveterinária);
