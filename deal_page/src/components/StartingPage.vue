<template>
<div class="start-page d-flex align-center text-center">
  <v-flex >
  <v-btn>
    <router-link :to="{name:'ProductList',params:{product_id:'pr1'}}">Deals</router-link>
  </v-btn>
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
.start-page {
  height: 100%;
  background: #42b983;
}

</style>
