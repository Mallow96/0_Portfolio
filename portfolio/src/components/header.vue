<script setup>
import Logo from "./logo.vue";
import MyNav from "../components/nav.vue";
</script>

<template>
  <header class="flex justify-between items-center">
    <router-link :to="{ name: 'main' }">
      <Logo />
    </router-link>
    <MyNav />
  </header>
</template>

<style scoped>
header {
  min-height: var(--header-h);
  padding: var(--header-padding-x) var(--header-padding-y);

  position: sticky;
  top: 0;
  left: 0;
  width: 100%;

  background-color: var(--color-bg-header);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid gray;
}
</style>
