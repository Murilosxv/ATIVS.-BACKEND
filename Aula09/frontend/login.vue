<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="loginUser">
    <div>
        <label>email:</label>
        <input v-mobel="email" type="email" required/>
    </div>
    <div>
        <label>Senha:</label>
        <input v-model="password" type="password" required/>
    </div>
    <button type="submit">Login</button>
        </form>
        <p v-if="message">{{ message }}</p>
    </div>
</template>

<script>
import api from '../axios'

export default {
    data() {
        return{
            email:'',
            password: '',
            message: '',
        };
    },
    methods: {
        async loginUser() {
            try{
                const response = await api.post('/auth/login',{
                    email: this.email,
                    password: this.password,
                });
                this.message = 'Login bem-sucedido!';
                localStorage.setItem('token', response.data.token);
            } catch (error) {
                this.message = error.response?.data.message || 'Erro ao fazer login';
            }  
        },
    },   
};
</script>
