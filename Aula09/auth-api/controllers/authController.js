const User = require('../models/user');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const {username, password } = req.body;

    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = new User ({ username, password: hashedPassword});
        await newUser.save();
        res.status(201).json({ message: 'Usuário registrado com sucesso' });
        } catch (error) {
            res.status(400).json({ message: 'Erro ao registrar usuário' });
    }    
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try{
        const user = await User.findOne({ username });
        if (!user) return res.status(401).json({ message: 'Usuário não encontrado'});
        
        const is = await bcrypt.compare(password, user.password);
        if (!is) return res.status(401).json({ message: 'Senha inválida'});


        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, { expiresIn: '1h'});

        res.json({ token });
    }catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
    };
