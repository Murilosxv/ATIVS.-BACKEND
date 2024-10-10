<template>
    <div class="dashboard">
        <h1>bem-Vindo ao Dashboard</h1>
        <p>Você está autenticado.</p>
        <button @click="logout">Sair</button>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            localStorage.removeItem('token');
            this.$router.push('/login');
        },
    },
};
</script>
<style scoped>
.doshboard{
    text-align: center;  
    margin-top: 50px 
}

</style>



