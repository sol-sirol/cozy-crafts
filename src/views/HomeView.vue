<template>
  <section class="main-swiper-screen">
    <div class="main-swiper-screen__wrapper">
      <main-swiper class="main-swiper-screen__swiper"></main-swiper>
    </div>
  </section>
  <section class="about">
    <div class="about__wrapper">
      <div class="about__containet container">
        <div class="about__body">
          <h1 class="about__title title">Cozy Crafts что это?</h1>
          <div class="about__text">
            Cozy Crafts - это некоммерческий демонстрационный проект имитирующий
            работу интернет-магазина. Обратите внимание, что все товары и
            материалы, представленные на сайте, не являются реальными и не
            предлагаются для продажи.
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="benefits">
    <div class="benefits__wrapper">
      <div class="benefits__container container">
        <div class="benefits__body">
          <div
            class="benefits__item"
            v-for="item in [
              {
                title: 'Дружественный к планете и устойчивый',
                text: 'Мы перерабатываем 100% наших отходов.',
              },
              {
                title: 'ПОДДЕРЖИВАЕТ МЕСТНЫЕ ПРЕДПРИЯТИЯ',
                text: 'Все продукты в подарочных коробках поставляются местными/малыми предприятиями.',
              },
              {
                title: 'ПРОДУКЦИЯ ВЫСОКОГО КАЧЕСТВА',
                text: 'Все наши изделия, изготавливаются вручную с особой тщательностью.',
              },
            ]"
            :key="item.title"
          >
            <div class="benefits__icon"></div>
            <h3 class="benefits__title">{{ item.title }}</h3>
            <div class="benefits__text">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="arrangements">
    <div class="arrangements__wrapper">
      <div class="arrangements__container container">
        <div class="arrangements__body">
          <h2 class="arrangements__title title">Носки нового уровня</h2>
          <div class="arrangements__text">
            Приготовьтесь погрузиться в мир непревзойденной роскоши и
            неподражаемого стиля с нашей новой коллекцией крафтовых носков,
            созданных с любовью и мастерством в каждом шве. Отныне ваш шаг будет
            не только удобным, но и стильным - с нашими крафтовыми носками вы
            будете всегда на шаг впереди модных тенденций.
          </div>
          <ProductsList
            class="arrangements__items"
            :category-id="3"
          ></ProductsList>
        </div>
      </div>
    </div>
  </section>
  <section class="gift-boxes">
    <div class="gift-boxes__wrapper">
      <div class="gift-boxes__container container">
        <div class="gift-boxes__body">
          <h2 class="gift-boxes__title title">
            Кружевные изделия нового уровня
          </h2>
          <div class="gift-boxes__text">
            Новая коллекция кружевных изделий представляет собой исключительную
            комбинацию элегантности и качества.Уникальный дизайн и внимание к
            деталям делают эти изделия идеальным выбором для тех, кто ценит
            непревзойденный стиль и утонченность.
          </div>
          <ProductsList
            class="gift-boxes__items"
            :category-id="1"
          ></ProductsList>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductsList from "@/components/ProductsList.vue";
import MainSwiper from "@/components/HomePageSections/MainSwiper.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    ProductsList,
    MainSwiper,
  },
});
</script>
