<template>
  <v-main class="main-container" fill-height>
    <header>
      <v-flex class="d-flex justify-space-between px-1">
        <div>
          <v-icon large @click="setShowShareOption">reply</v-icon>
        </div>
        <div class="pt-1">
          <v-img :src="product.website_logo" width="160px"></v-img>
        </div>
        <div>
          <v-icon class="pt-1" large>favorite_border</v-icon>
        </div>
      </v-flex>
    </header>
    <v-container>
      <v-row>
        <v-card flat fill-height style="height: 100%">
          <v-flex column style="height: 40vh">
            <v-img contain height="100%" :src="product.Image"></v-img>
          </v-flex>

          <v-sheet
            style="height: 5vh"
            class="d-flex align-center justify-center green px-0"
          >
            <h2 class="white--text">{{ product.off }}% OFF</h2>
          </v-sheet>

          <v-flex class="d-flex justify-space-between align-start px-2 pt-3">
            <div class="d-row-flex">
              <h4>{{ product.title }}</h4>
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
              <h4>₹{{ (product.price * product.off) / 100 }}</h4>
              <h4
                class="
                  font-weight-medium
                  pr-1
                  text--secondary text-decoration-line-through
                "
              >
                ₹{{ product.price }}
              </h4>
            </div>
          </v-flex>
          <div class="description" style="height: 25vh">
            <v-card-text class="d-flex text--secondary px-2 pt-1 my-0">{{
              product.description.substring(0, 250) + "..."
            }}</v-card-text>
          </div>
        </v-card>
        <v-col>
          <v-footer bottom fixed padless class="mb-1 justify-center white btn">
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
                  transition-fast-in-fast-out
                  v-card--reveal
                  text-h4

                "
              >
                <ShareOption />
              </div>
            </v-expand-transition>
          </v-footer>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import ShareOption from "../components/ShareOption.vue";
export default {
  props: ["product"],
  components: { ShareOption },
  data() {
    return {
      showShareOptions: false,
    };
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
}
.btn {
  z-index: 100;
}
</style>