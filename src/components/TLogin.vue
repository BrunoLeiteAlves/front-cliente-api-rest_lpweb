<template>
    <div>
        <div id="login">
        <form @submit.prevent="submitLogin">
            <h1>Login</h1>
            <label>Digite os seus dados de acesso.</label><br>
            <h2 for="usuario">Usuário</h2>
            <input v-model="username" type="text" name="usuario" placeholder="Digite seu usuário"><br>
        
            <h2 for="senha">Senha</h2>
            <input v-model="password" type="password" name="senha" placeholder="Digite sua senha"><br>
            <a href="reenviarsenha.html" rel="esqueci minha senha">esqueci minha senha</a>
            <input type="submit" value="Entrar">
        </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            username: '',
            password: '',
            };
        },
        methods: {
            submitLogin() {
            this.$emit('login', {
                username: this.username,
                password: this.password,
            });
            },
        },
        };
</script>
<style scoped>
        @charset "UTF";

        * {
            font-family: sans-serif;
        }

        h1 {
            color: #1D0F64;
            text-align: center;
            font-size: 25px;
        }

        label {
            color: grey;
            width: 100%;
            font-size: 15px;
            margin-left: 10px;
        }

        a {
            display: inline-block;    
            margin-top: 10px;
            margin-bottom: 10px;
            margin-left: 5px;
            padding: 5px;
        }

        body {
            background-color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }

        #container {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 10px;
            width: 85%;
            height: 100%;
            margin-top: 50px;
        }

        body {
            background-color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }

        form {
            border: 1px solid #E9E7E8;
            background-color: white;
            border-radius: 10px;
            box-shadow: 2px 2px 5px #888888;
            padding: 15px;
            margin-left: 3px;
            margin-right: 0px;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 0px;
            padding-block: 1px;
        }

        h2 {
            color: #1D0F64;
            display: inline-block;    
            margin-top: 5px;
            margin-left: 5px;
            padding: 5px;
            font-size: 15px;
        }

        input, select {
            width: calc(100% - 50px);
            padding: 10px;
            border-radius: 5px;
            margin-left: 5px;
            margin-bottom: 7px;
        }


        /* botão */
        input[type="submit"] {
            font-size: 16px;
            background-color: #1D0F64;
            color: white;
            padding: 15px 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: #553FCE;
        }
</style>