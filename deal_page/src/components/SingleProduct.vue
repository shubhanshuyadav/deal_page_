<template>
  <v-main class="main-container " fill-height>
    <header>
      <v-flex class="d-flex justify-space-between px-1">
        <div >
          <v-btn icon>
            <v-icon large @click="setShowShareOption">reply</v-icon>
          </v-btn>
        </div>
        <div class="text-center">
          <v-img :src="product.website_logo" width="160px"></v-img>
          <Timer :endAt="product.end_time"/>
        </div>
        <div class="px-1">
          <v-icon large @click="setShowShareOption">favorite_border
          </v-icon>
        </div>
      </v-flex>
    </header>
    <v-container fluid >
      <v-row class="row-container">
        <v-card flat fill-height style="height: 100%">
          <v-flex column style="height: 40vh">
            <v-img contain height="100%" :src="product.Image"></v-img>
          </v-flex>

          <v-sheet
            style="height: 5vh"
            class="d-flex align-center justify-center px-0 green"
          >
            <h2 class="white--text">{{ product.off }}% OFF</h2>
          </v-sheet>

          <v-flex class="d-flex justify-space-between align-start px-4 pt-3">
            <div style="font-size:2.5vh" class="d-row-flex">
              <h3>{{ product.title }}</h3>
              <v-flex class="d-inline-flex justify-space-between">
                <h5 class="white--text px-1 mr-1 green rounded-sm">
                  {{ product.ratings }}<v-icon small dark>star</v-icon>
                </h5>
                <h5 class="font-weight-medium text--secondary">
                  ({{ product.reviews }})
                </h5>
              </v-flex>
            </div>
            <div style="font-size:2.5vh" class="d-row-flex">
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
          <div>
            <v-card-text style="font-size: 2.3vh;" class="d-flex text--secondary">{{
              product.description.substring(0, 200) + "..."
            }}</v-card-text>
          </div>
        </v-card>
         <v-col>
         
        </v-col>
      </v-row>
    </v-container>
     <v-footer padless top absolute class="pb-1 d-block text-center white btn">
            <v-btn
              :href="product.buying_link"
              class="white--text"
              color="#2C2891"
              >Buy Now</v-btn
            >
            <v-expand-transition>
              <div
                bottom
                v-if="this.showShareOptions"
                class="
                  d-flex
                  justify-center
                  transition-fast-in-fast-out
                  v-card--reveal
                  text-h4
                "
              >
                <ShareOption />
              </div>
            </v-expand-transition>
          </v-footer>
  </v-main>
</template>

<script>
import ShareOption from "../components/ShareOption.vue";
import Timer from "../components/Timer.vue"
export default {
  props: ["product"],
  components: { ShareOption,Timer},
  data() {
    return {
      showShareOptions: false,
    };
  },
mounted(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
    // We execute the same script as before
    console.log("Resized..........");
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
     this.$router.go();
});
},
  methods: {
    setShowShareOption() {
      console.log("i got clicked");
      this.showShareOptions = !this.showShareOptions;
    },
  },
};
</script>

<style>
.main-container {
  box-sizing: border-box;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
}


</style>