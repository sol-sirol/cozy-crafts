<template>
  <div class="about-us-page">
    <div class="about-us-page__container container">
      <h1 class="about-us-page__main-title title">Раздел о нас</h1>
      <div class="about-us-page__wrapper">
        <aside class="about-us-page__sidebar sidebar">
          <nav class="sidebar__nav">
            <ul class="sidebar__nav-list">
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
                class="sidebar__nav-item"
              >
                <router-link
                  :to="{ name: item.name }"
                  class="sidebar__nav-link"
                  >{{ item.title }}</router-link
                >
              </li>
            </ul>
          </nav>
        </aside>
        <div class="about-us-page__body">
          <section class="about-us-page__description">
            <h2 class="about-us-page__title title">Наша Философия</h2>
            <div class="about-us-page__text">
              Наша философия заключается в том, что мода - это не просто одежда,
              это способ выразить себя, свою уверенность и стиль. Мы верим, что
              каждый человек уникален, и его образ должен отражать его
              индивидуальность. Поэтому мы создаем коллекции, которые подходят
              для разных типов фигур, возрастов и стилей.
            </div>
            <ul class="about-us-card-list">
              <li>
                <div class="about-us-card-list__item about-us-card">
                  <div class="about-us-card__title">Преимущества</div>
                  <div class="about-us-card__body">
                    <p class="about-us-card__text">
                      Мы признаем уникальность каждого человека и стремимся
                      помочь им выразить свою индивидуальность через моду. Мы
                      создаем коллекции, которые подходят для разных типов
                      фигур, возрастов и стилей, чтобы удовлетворить потребности
                      разнообразных клиентов.
                    </p>
                    <img
                      class="about-us-card__image"
                      src="../assets/images/about-us/about-us-first.jpg"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div class="about-us-card">
                  <div class="about-us-card__title">Традиционность</div>
                  <div class="about-us-card__body">
                    <img
                      class="about-us-card__image"
                      src="../assets/images/about-us/about-us-second.jpg"
                    />
                    <p class="about-us-card__text">
                      Мы уделяем особое внимание качеству наших изделий, чтобы
                      обеспечить клиентам долговременное удовольствие от их
                      покупок. Мы создаем коллекции, которые подходят для разных
                      типов фигур, возрастов и стилей, чтобы удовлетворить
                      потребности разнообразных клиентов.Мы стремимся помочь
                      каждому человеку почувствовать себя красивым, уверенным и
                      стильным через нашу модную одежду.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { RouterNames } from "@/router";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutUsPage",
  data() {
    return {
      RouterNames: RouterNames,
    };
  },
});
</script>

<style scoped lang="scss">
// * {
//   border: 1px solid red;
// }
.about-us-page {
  &__main-title {
    margin: 95px 0;
    position: relative;
  }

  &__title {
    margin: 16px 0;
    position: relative;
    font-size: 36px;
    line-height: 48px;
  }

  &__main-title::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-51%);
    width: 100%;
    max-width: 510px;
    height: 2px;
    background-color: #eeb960;
  }

  &__text {
    max-width: 940px;
    margin: 0 auto;
    // padding-top: 35px;
    padding-bottom: 85px;

    text-align: center;
  }

  &__wrapper {
    // min-height: 100vh;
    display: flex;
    padding-bottom: 36px;
  }

  &__sidebar {
    padding-right: 56px;
    flex: 0 0 220px;
  }

  &__body {
    flex: 1 1 auto;
  }
}

.about-us-card-list {
  li:not(:last-child) {
    margin-bottom: 36px;
  }

  li:nth-child(2n + 1) {
    .about-us-card__image {
      margin-left: 20px;
    }
  }
  li:nth-child(2n) {
    .about-us-card__image {
      margin-right: 20px;
    }
  }
}
.about-us-card {
  &__title {
    margin-bottom: 16px;
    color: #332b25;
    font-family: "Lobster";
    font-size: 28px;
    line-height: 44px;
    letter-spacing: 0.2em;
  }

  &__body {
    display: flex;
  }

  &__text {
  }

  &__image {
    width: 400px;
    object-fit: cover;
  }
}

.sidebar {
  position: relative;

  &__nav {
    padding-top: 24px;
    position: sticky;
    top: 0;
  }

  &__nav-list {
  }

  &__nav-item {
    text-align: right;
  }
}

@media (max-width: 991.98px) {
  .sidebar {
    display: none;
  }
}
@media (max-width: 767.98px) {
  .about-us-page {
    &__main-title {
      margin: 45px 0;
    }

    &__title {
      font-size: 24px;
      line-height: 38px;
    }

    &__text {
      padding-bottom: 36px;
    }
  }

  .about-us-card-list {
    .about-us-card {
      &__body {
        flex-direction: column;
        align-items: center;
      }
      &__title {
        text-align: center;
        font-size: 18px;
        line-height: 26px;
      }
      &__text {
        text-align: center;
        margin-bottom: 16px;
      }

      &__image {
        margin-right: 0px !important;
      }
    }

    li:nth-child(2n) {
      .about-us-card {
        &__body {
          flex-direction: column-reverse;
        }
      }
    }
  }
}
</style>
