<script setup>
import DevTest from "./components/HelloWorld.vue";
import AppHeader from "./components/header.vue";
import { watch, onMounted } from "vue";
import { useStore } from "./store/store-main"; // 假設你的 store 名稱

const mainStore = useStore();

watch(
  () => mainStore.isDark,
  (isDark) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
  { immediate: true }
);
</script>

<template>
  <!-- <DevTest /> -->
  <AppHeader />

  <main>
    <router-view />
  </main>
</template>

<style scoped></style>
