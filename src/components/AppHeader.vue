<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__container container">
        <div class="header__body">
          <a href="index.html" class="header__logo logo">
            <img src="@/assets/images/icons/logo.png" alt="logo" />
          </a>
          <nav>
            <ul class="header__nav nav">
              <li
                v-for="item in [
                  {
                    name: 'Home',
                    link: '/',
                  },
                  {
                    name: 'Catalog',
                    link: '/catalog',
                  },
                  {
                    name: 'About',
                    link: '/about',
                  },
                ]"
                :key="item.name"
                class="nav__item"
              >
                <!-- TODO: add active-class -->
                <router-link to="/" class="nav__link" active-class="">{{
                  item.name
                }}</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
