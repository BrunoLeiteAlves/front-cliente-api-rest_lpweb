<template>
  <div>
    <NavBar v-if="!isLoginPage" :logo="logo_src" :alt="app_name"/>
    <router-view />
    <DevFooter v-if="!isLoginPage" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import DevFooter from './components/DevFooter.vue';
export default {
  components: {
    NavBar,
    DevFooter
  },
  data() {
    return {
      logo_src: '/img/logo.png',
      app_name: "API REST Clientes"
    };
  },
  computed: {
    isLoginPage() {
      return this.$route.name === 'ShowLogin';
    }
  }
};
</script>

<style scoped>
/* @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"; */
</style>