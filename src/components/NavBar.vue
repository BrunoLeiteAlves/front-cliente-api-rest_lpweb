<template>
    
    <div id="nav">
        <router-link to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <h1 class="title">Api Rest Clientes</h1>
        <router-link to="/home">Cadastrar Clientes</router-link>
        <router-link to="/clientes">Listar Clientes</router-link>
        <router-link to="/">Sair</router-link>
    </div>

</template>

<script>

    export default {
        name: "NavBar",
        props: ["logo", "alt"]
    }

</script>

<style scoped>
    #nav {
    background-color: #222;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  #nav #logo-url {
    margin: auto;
    margin-left: 0;
  }
  #logo {
    width: 60px;
  }
  #nav > h1 {
    color: #fff;
    font-family: sans-serif;
    margin: auto;
  }
  #nav a {
    color: #fff;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
  }
  #nav a:hover {
    color: #63d1a7;
  }
</style>