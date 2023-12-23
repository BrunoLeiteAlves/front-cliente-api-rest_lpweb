<template>
  <div>
    <NavBar :logo="logo_src" :alt="app_name"/>
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  components: {
    NavBar
  },
  data() {
    return {
      logo_src: '/img/logo.png',
      app_name: "API REST Clientes"
    }
  }
}
</script>

<style scoped>
/* @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"; */
</style>