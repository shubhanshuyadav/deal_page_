<template>
  <v-app id="app">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
  *{
    padding: 0;
    margin:0;
    box-sizing: border-box;
  }
  html,body,#app{
    width: 100%;
    height: 100vh;
  }
</style>
