<template>
  <div style="height:100%; background:#42b983 " class="start-page d-flex align-center text-center">
    <v-flex>
      <router-link :to="{ name: 'ProductList', params: { product_id: 'pr1' } }"
        ><v-btn>Deals </v-btn></router-link
      >
    </v-flex>
  </div>
</template>

<script>
export default {
  name: "StartingPage",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
