<template>
  <header class="header">
    <div v-if="$route.path.includes('product')" class="header-product__wrapper">
      <div class="header-product__container container_product">
        <div class="header-product__body">
          <h1 class="header-product__title">COZY CRAFTS</h1>
        </div>
      </div>
    </div>
    <div class="header__wrapper">
      <div class="header__container container">
        <div class="header__body">
          <router-link
            :to="{ name: RouterNames.home }"
            class="header__logo logo"
          >
            <img src="@/assets/images/icons/logo.png" alt="logo" />
          </router-link>
          <nav>
            <ul class="header__nav nav">
              <li
                v-for="item in [
                  {
                    name: RouterNames.home,
                    title: 'Главная',
                  },
                  {
                    name: RouterNames.catalog,
                    title: 'Каталог',
                  },
                  {
                    name: RouterNames.about,
                    title: 'О нас',
                  },
                ]"
                :key="item.name"
                class="nav__item"
              >
                <!-- TODO: add active-class -->
                <router-link
                  :to="{ name: item.name }"
                  class="nav__link"
                  active-class=""
                  >{{ item.title }}</router-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { RouterNames } from "@/router";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppHeader",
  data() {
    return {
      RouterNames: RouterNames,
    };
  },
});
</script>

<style lang="scss">
.header {
  &__wrapper {
    // background-color: #eeb960;
  }
}
</style>
