<template>
  <v-main class="main-container" fill-height>
        <v-flex height="10vh" class="d-flex justify-space-between px-1">
          <div>
            <v-icon large>reply</v-icon>
          </div>
          <div class="pt-1">
            <v-img :src="product.website_logo" width="35vw"></v-img>
          </div>
          <div>
            <v-icon class="pt-1" large>favorite_border</v-icon>
          </div>
        </v-flex>

        <v-flex column style="height: 40vh">
          <v-img contain height="100%" :src="product.Image"></v-img>
        </v-flex>

          <v-flex  style="height: 5vh" class="d-flex align-center justify-center green px-0">
            <h2 class=" white--text">{{ product.off }}% OFF</h2>
          </v-flex>

          <v-flex style="height: 14vh" grow class="d-flex overflow-y justify-space-between align-start px-3 pt-3">
            <div class="d-row-flex">
              <h3 class="mr-1">{{ product.title }}</h3>
              <v-flex class="d-inline-flex justify-space-between">
                <h5 class="white--text px-1 mr-1 green rounded-sm">
                  {{ product.ratings }}<v-icon small dark>star</v-icon>
                </h5>
                <h5 class="font-weight-medium text--secondary">
                  ({{ product.reviews }})
                </h5>
              </v-flex>
            </div>
            <div class="d-row-flex">
              <h3>₹{{ (product.price * product.off) / 100 }}</h3>
              <h5
                class="
                  font-weight-medium
                  pr-1
                  text--secondary text-decoration-line-through
                "
              >
                ₹{{ product.price }}
              </h5>
            </div>
          </v-flex>

          <v-flex class="overflow-y" style="height: 20vh; ">
            <p class="d-flex text--secondary px-2 pt-1 my-0 ">
              {{ product.description.substring(0, 250) + "..." }}
            </p>
          </v-flex>
      <div class=" d-flex align-end justify-center mt-auto" style="height: 10vh">
        <v-btn :href="product.buying_link" class="white--text" large color="#2C2891"
          >Buy Now</v-btn>
      </div>
  </v-main>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style>
.main-container{
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
 
}
 .overflow-y{
    font-size: 2.7vh;
 }
</style>