<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
      src="https://www.reactionarytimes.com/images/2019/10/404-page-error.png"
      height="400px"
    ></v-img>
    <v-card-actions>
      <div class="mx-auto">
          <router-link :to="{name:'ProductList',params:{product_id:'pr1'}}">
               <v-btn color="orange lighten-2"> Go to deals </v-btn>
          </router-link>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>