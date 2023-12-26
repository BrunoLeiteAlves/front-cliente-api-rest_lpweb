<template>
    <div>        
        <TLogin @login="login" />
        <div v-if="loggedIn">
        <NavBar :logo="logo" :alt="alt" />
        </div>
        <div v-if="loginError">
        <p style="color: red;">{{ loginError }}</p>
        </div>
        </div>
</template>

<script>
import TLogin from '../components/TLogin.vue';
import NavBar from '../components/NavBar.vue';


    export default {
        components: {
            TLogin,
            NavBar
        },
        data() {
            return {
            loggedIn: false,
            loginError: ''
            };
        },
        methods: {
            login(credentials) {
            console.log('Received credentials:', credentials);

            // Replace the following line with your actual login validation logic
            if (credentials.username === 'admin' && credentials.password === 'admin') {
                this.loggedIn = true;
                this.loginError = '';
                this.$router.push({ name: 'HomePage' });
            } else {
                // Handle failed login
                this.loggedIn = false;
                this.loginError = 'Não foi possível autenticar!';
            }
            }
        }
        };
</script>

<style scoped>
</style>