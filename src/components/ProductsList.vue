<template>
  <div class="market-box">
    <AppLoader v-if="loading"></AppLoader>
    <div v-else-if="!products.length">Товары не найдены</div>
    <ProductCard
      v-else
      v-for="product in products"
      :key="product.id"
      :product="product"
      class="market-box__item"
    ></ProductCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductCard from "./ProductCard.vue";
import AppLoader from "./AppLoader.vue";
import { getProducts } from "@/api";
import { ProductType } from "@/api/types";

interface State {
  products: ProductType[];
  loading: boolean;
}

export default defineComponent({
  name: "ProductsList",
  components: { ProductCard, AppLoader },
  props: {
    categoryId: {
      type: Number,
    },
  },
  data: (): State => ({
    products: [],
    loading: true,
  }),
  mounted() {
    getProducts({ categoryId: this.categoryId })
      .then((response) => {
        this.products = response.data.items;
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.loading = false;
      });
  },
});
</script>
