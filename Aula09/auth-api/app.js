require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlparser: true,
    useUnifiedTopology: true
})

.then (() => console.log ('conectado ao MongoDB'))
.catch((error) => console.error ('Erro ao conectar ao MongoDB', error));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
 
