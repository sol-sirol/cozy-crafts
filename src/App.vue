<template>
  <AppHeader></AppHeader>

  <main class="main">
    <router-view />
  </main>

  <AppFooter></AppFooter>
</template>

<script lang="ts">
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
