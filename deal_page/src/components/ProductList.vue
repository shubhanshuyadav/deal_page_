<template>
  <v-container class="px-0 py-0 product-list">
    <swiper
      ref="mySwiper"
      @slideChange="onSwiperSlideChangeEnd"
      :options="swiperOptions"
      class="swiper"
      style="max-width: 800px"
    >
      <swiper-slide class="swiper" v-for="product in productList" :key="product.id">
        <SingleProduct :product="product"></SingleProduct>
      </swiper-slide>
    </swiper>
  </v-container>
</template>

   
<script>
import SingleProduct from "../components/SingleProduct.vue";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import * as Papa from "papaparse";

export default {
  name: "carrousel",
  components: {
    SingleProduct,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      productList: [],
      currentProductIndex: 0,
      url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAMooiKuDwfyYqR4WN2jMLx7__w4pGV7CcJKL6fppjfHIV-iGJRAdZKFYq4fzDaf4-WNLrbNj5oxtU/pub?gid=0&single=true&output=csv",
      swiperOptions: {
        direction: "vertical",
        centeredSlides: true,
        speed: 600,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    product_id: function () {
      return this.$route.params.product_id;
    },
  },
  directives: {
    swiper: directive,
  },
  created: function () {
    this.fetchProducts();
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
    this.$router.go();
});
  },
  updated() {
    this.swiper.slideTo(this.currentProductIndex, 1000, false);
  },
 

  methods: {
    fetchProducts() {
      Papa.parse(this.url, {
        download: true,
        header: true,
        complete: (results) => {
          this.productList = results.data;
          this.setCurrentProductIndex();
        },
      });
    },
    onSwiperSlideChangeEnd() {
      this.$router
        .push({
          name: "ProductList",
          params: {
            product_id:
              this.productList[this.$refs.mySwiper.$swiper.activeIndex].id,
          },
        })
        .catch(() => {});
    },
    setCurrentProductIndex() {
      for (let i = 0; i < this.productList.length; i++) {
        if (this.$route.params.product_id === this.productList[i].id) {
          this.currentProductIndex = i;
          return;
        }
      }
      this.$router.push({ name: "NotFound" });
    },
  },
};
</script>

<style scoped>
.swiper{
  position: relative;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
}
</style>
