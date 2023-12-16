<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :pagination="{ clickable: true }"
    :loop="true"
    :autoplay="true"
    class="main-swiper"
  >
    <swiper-slide
      v-for="item in [
        {
          src: require('../../assets/images/main-slider/main-slider-1.webp'),
          alt: 'new collection',
        },
        {
          src: require('../../assets/images/main-slider/main-slider-2.webp'),
          alt: 'new collection',
        },
        {
          src: require('../../assets/images/main-slider/main-slider-3.webp'),
          alt: 'new collection',
        },
      ]"
      :key="item.alt"
    >
      <img class="main-swiper__image" :src="item.src" :alt="item.alt" />
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default defineComponent({
  name: "MainSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  // TODO Разобраться с setup
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
});
</script>

<style lang="scss">
.main-swiper {
  --swiper-theme-color: #eeb960;
  &__image {
    width: 100%;
  }
}
</style>
