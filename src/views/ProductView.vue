<template>
  <div v-if="loading" class="container">
    <AppLoader></AppLoader>
  </div>
  <div v-else-if="!product" class="container">Товар не найден</div>
  <section v-else class="product-panel">
    <div class="product-panel__wrapper">
      <div class="product-panel__containet container_product">
        <div class="product-panel__body">
          <div class="product-panel__main">
            <div class="product-panel__image-wrapper unselectable">
              <img
                class="product-panel__image"
                :src="product.colors[activeColorIndex].gallery?.[0].file.url"
              />
              <div class="product-panel__image-color-selection">
                <div
                  v-for="(item, index) in product.colors"
                  class="product-panel__image-color-item color-item"
                  :class="{ active: index === activeColorIndex }"
                  :key="item.id"
                  @click="setActiveColorIndex(index)"
                >
                  <img
                    class="color-item__image"
                    :src="item.gallery?.[0].file.url"
                  />
                </div>
              </div>
            </div>

            <div class="product-panel__description">
              <h1 class="product-panel__title">{{ product.title }}</h1>
              <div class="product-panel__price">{{ productPrice }}</div>

              <AppStepper
                v-model:value="counter"
                :style="{ marginBottom: '16px' }"
              ></AppStepper>

              <div class="product-panel__sub-title">Описание</div>
              <div class="product-panel__description-text">
                Материал:
                <ul class="product-panel__description-list">
                  <li class="product-panel__description-item">
                    {{ product.materials[0].title }}
                  </li>
                </ul>
              </div>
              <div class="product-panel__description-text">
                Уход:
                <ul class="product-panel__description-list">
                  <li class="product-panel__description-item">
                    Машинная стирка при макс. 30ºC короткий отжим
                  </li>
                  <li class="product-panel__description-item">
                    Гладить при макс. 110ºC
                  </li>
                  <li class="product-panel__description-item">
                    Не использовать машинную сушку
                  </li>
                  <li class="product-panel__description-item">
                    Отбеливать запрещено
                  </li>
                  <li class="product-panel__description-item">
                    Не подвергать химчистке
                  </li>
                </ul>
              </div>
              <div class="product-panel__description-warning">
                *Этот сайт является демонстрационным проектом, имитирующим
                работу интернет-магазина, и не предлагает продажу товаров*
              </div>
              <button
                class="product-panel__description-button"
                @click="console.log(counter)"
              >
                Купить сейчас
              </button>
            </div>
          </div>
          <!-- <div class="product-panel__reviews reviews-panel">
            <div class="reviews-panel__number">108</div>
            <div class="reviews-panel__text">Reviews</div>
            <div class="reviews-panel__starts four-stars">
              <svg
                width="28"
                height="26"
                viewBox="0 0 28 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.328 0.927054C13.6274 0.00574327 14.9308 0.00574017 15.2301 0.927051L17.7094 8.55758C17.8433 8.9696 18.2273 9.24856 18.6605 9.24856H26.6837C27.6524 9.24856 28.0552 10.4882 27.2715 11.0576L20.7806 15.7735C20.4301 16.0281 20.2834 16.4795 20.4173 16.8915L22.8966 24.5221C23.196 25.4434 22.1415 26.2095 21.3578 25.6401L14.8669 20.9242C14.5164 20.6695 14.0418 20.6695 13.6913 20.9242L7.20037 25.6401C6.41666 26.2095 5.36218 25.4434 5.66153 24.5221L8.14084 16.8915C8.27471 16.4795 8.12805 16.0281 7.77757 15.7735L1.28665 11.0576C0.502941 10.4882 0.905714 9.24856 1.87444 9.24856H9.89765C10.3309 9.24856 10.7148 8.9696 10.8487 8.55758L13.328 0.927054Z"
                  fill="#332B25"
                />
              </svg>
              <svg
                width="28"
                height="26"
                viewBox="0 0 28 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.328 0.927054C13.6274 0.00574327 14.9308 0.00574017 15.2301 0.927051L17.7094 8.55758C17.8433 8.9696 18.2273 9.24856 18.6605 9.24856H26.6837C27.6524 9.24856 28.0552 10.4882 27.2715 11.0576L20.7806 15.7735C20.4301 16.0281 20.2834 16.4795 20.4173 16.8915L22.8966 24.5221C23.196 25.4434 22.1415 26.2095 21.3578 25.6401L14.8669 20.9242C14.5164 20.6695 14.0418 20.6695 13.6913 20.9242L7.20037 25.6401C6.41666 26.2095 5.36218 25.4434 5.66153 24.5221L8.14084 16.8915C8.27471 16.4795 8.12805 16.0281 7.77757 15.7735L1.28665 11.0576C0.502941 10.4882 0.905714 9.24856 1.87444 9.24856H9.89765C10.3309 9.24856 10.7148 8.9696 10.8487 8.55758L13.328 0.927054Z"
                  fill="#332B25"
                />
              </svg>
              <svg
                width="28"
                height="26"
                viewBox="0 0 28 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.328 0.927054C13.6274 0.00574327 14.9308 0.00574017 15.2301 0.927051L17.7094 8.55758C17.8433 8.9696 18.2273 9.24856 18.6605 9.24856H26.6837C27.6524 9.24856 28.0552 10.4882 27.2715 11.0576L20.7806 15.7735C20.4301 16.0281 20.2834 16.4795 20.4173 16.8915L22.8966 24.5221C23.196 25.4434 22.1415 26.2095 21.3578 25.6401L14.8669 20.9242C14.5164 20.6695 14.0418 20.6695 13.6913 20.9242L7.20037 25.6401C6.41666 26.2095 5.36218 25.4434 5.66153 24.5221L8.14084 16.8915C8.27471 16.4795 8.12805 16.0281 7.77757 15.7735L1.28665 11.0576C0.502941 10.4882 0.905714 9.24856 1.87444 9.24856H9.89765C10.3309 9.24856 10.7148 8.9696 10.8487 8.55758L13.328 0.927054Z"
                  fill="#332B25"
                />
              </svg>
              <svg
                width="28"
                height="26"
                viewBox="0 0 28 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.328 0.927054C13.6274 0.00574327 14.9308 0.00574017 15.2301 0.927051L17.7094 8.55758C17.8433 8.9696 18.2273 9.24856 18.6605 9.24856H26.6837C27.6524 9.24856 28.0552 10.4882 27.2715 11.0576L20.7806 15.7735C20.4301 16.0281 20.2834 16.4795 20.4173 16.8915L22.8966 24.5221C23.196 25.4434 22.1415 26.2095 21.3578 25.6401L14.8669 20.9242C14.5164 20.6695 14.0418 20.6695 13.6913 20.9242L7.20037 25.6401C6.41666 26.2095 5.36218 25.4434 5.66153 24.5221L8.14084 16.8915C8.27471 16.4795 8.12805 16.0281 7.77757 15.7735L1.28665 11.0576C0.502941 10.4882 0.905714 9.24856 1.87444 9.24856H9.89765C10.3309 9.24856 10.7148 8.9696 10.8487 8.55758L13.328 0.927054Z"
                  fill="#332B25"
                />
              </svg>
              <svg
                width="28"
                height="26"
                viewBox="0 0 28 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.328 0.927054C13.6274 0.00574327 14.9308 0.00574017 15.2301 0.927051L17.7094 8.55758C17.8433 8.9696 18.2273 9.24856 18.6605 9.24856H26.6837C27.6524 9.24856 28.0552 10.4882 27.2715 11.0576L20.7806 15.7735C20.4301 16.0281 20.2834 16.4795 20.4173 16.8915L22.8966 24.5221C23.196 25.4434 22.1415 26.2095 21.3578 25.6401L14.8669 20.9242C14.5164 20.6695 14.0418 20.6695 13.6913 20.9242L7.20037 25.6401C6.41666 26.2095 5.36218 25.4434 5.66153 24.5221L8.14084 16.8915C8.27471 16.4795 8.12805 16.0281 7.77757 15.7735L1.28665 11.0576C0.502941 10.4882 0.905714 9.24856 1.87444 9.24856H9.89765C10.3309 9.24856 10.7148 8.9696 10.8487 8.55758L13.328 0.927054Z"
                  fill="#332B25"
                />
              </svg>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ProductType, ProductId } from "@/api/types";
import { getProductById } from "@/api";
import AppLoader from "@/components/AppLoader.vue";
import AppStepper from "@/components/UI/AppStepper.vue";

type Store = {
  product: ProductType | null;
  loading: boolean;
  counter: number;
  activeColorIndex: number;
};

export default defineComponent({
  name: "ProductView",
  components: { AppLoader, AppStepper },
  data: (): Store => ({
    product: null,
    loading: true,
    counter: 1,
    activeColorIndex: 0,
  }),
  mounted() {
    getProductById({ id: +this.$route.params.id as ProductId })
      .then((data) => {
        console.log(data.data);
        this.product = data.data;
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    setActiveColorIndex(index: number) {
      console.log(index);
      this.activeColorIndex = index;
    },
  },

  computed: {
    productPrice() {
      if (!this.product) return 0;
      return this.product.price * this.counter;
    },
  },

  watch: {
    counter(nev) {
      console.log(nev);
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
