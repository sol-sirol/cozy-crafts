<template>
  <div class="product-item">
    <div class="product-item__lake"></div>
    <div class="product-item__card"></div>
    <router-link
      :to="{ name: RouterNames.product, params: { id: $props.product.id } }"
    >
      <img
        :src="
          product.colors?.[0].gallery?.[0].file.url ||
          require('@/assets/images/icons/nophoto.svg')
        "
        alt="small bouquet of flowers"
        class="product-item__img"
      />
    </router-link>

    <router-link
      :to="{ name: RouterNames.product, params: { id: $props.product.id } }"
      class="product-item__title title-product title-product_underlain"
      >{{ product.title }}</router-link
    >
    <router-link
      :to="{ name: RouterNames.product, params: { id: $props.product.id } }"
      class="product-item__category title-product"
      >{{ product.slug }}</router-link
    >

    <div class="product-item__price price">{{ product.price }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { RouterNames } from "@/router";
import { ProductType } from "@/api/types";

export default defineComponent({
  name: "ProductCard",
  props: {
    product: {
      type: Object as PropType<ProductType>,
      required: true,
    },
  },
  data() {
    return {
      RouterNames: RouterNames,
    };
  },
  // props: {
  //   // className: {
  //   //   type: String,
  //   // },
  //   // product: {
  //   //   type: Object as PropType<{
  //   //     title: string;
  //   //   }>,
  //   //   required: true,
  //   // },
  // },
});
</script>
