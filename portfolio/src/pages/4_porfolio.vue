<script setup>
import { onMounted } from "vue";
import { usePortStore } from "../store/store-portfolio";

const portStore = usePortStore();

onMounted(() => {
  portStore.fetchProjects();
});
</script>

<template>
  <section>
    <div class="grid">
      <div v-for="item in portStore.projects" :key="item.id" class="card">
        <h3>{{ item.title }}</h3>
        <p>分類：{{ item.category }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
