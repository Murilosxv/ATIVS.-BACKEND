const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req,res) => {
    res.send('API funcionando!');
});

app.listen(port, () => {
console.log (`Servidor rodando na porta ${port}`);
});

app.post('/data', (req, res) => {
    const { name, age} = req.body;
    res.send (`Nome: ${name}, Idade: ${age}`);
});