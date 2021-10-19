<template>
<div class="start-page btn">
  <v-flex >
     <v-btn >
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
  text-align: center;
  width: 100vw;
  height: 100vh;
  background: #42b983;
}
.btn{
  display: flex;
  align-items: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
