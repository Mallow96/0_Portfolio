<script setup>
import { onMounted } from "vue";
import { usePortStore } from "../store/store-portfolio";

const portStore = usePortStore();

onMounted(() => {
  portStore.fetchProjects();
});
</script>

<template>
  <div class="grid">
    <div v-for="item in portStore.projects" :key="item.id" class="card">
      <h3>{{ item.title }}</h3>
      <p>分類：{{ item.category }}</p>
    </div>
  </div>
</template>

<style scoped></style>
