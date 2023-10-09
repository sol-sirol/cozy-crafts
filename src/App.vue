<template>
  <AppHeader></AppHeader>

  <main class="main">
    <router-view />
  </main>

  <AppFooter></AppFooter>
</template>

<script>
export default {
  name: "App",
  components: {
    AppHeader: () => import("@/components/AppHeader"),
    AppFooter: () => import("@/components/AppFooter"),
  },
};
</script>
