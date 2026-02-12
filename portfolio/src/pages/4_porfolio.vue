<script setup>
import { onMounted } from "vue";
import { usePortStore } from "../store/store-portfolio";
import { useLangStore } from "../store/store-lan"; // 假設你的 Pinia Store 路徑

const portStore = usePortStore();
const langStore = useLangStore();

onMounted(() => {
  portStore.fetchProjects();
});
</script>

<template>
  <section>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="item in portStore.projects" :key="item.id" class="card">
        <h3>{{ item.title[langStore.currentLang] }}</h3>
        <p>{{ item.category[langStore.currentLang] }}</p>
        <ul>
          <li
            v-for="(detail, index) in item.details[langStore.currentLang]"
            :key="index"
          >
            {{ detail }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  border: 1px solid rgb(180, 180, 180);
  border-radius: 0.75rem;
  padding: 1rem;
}

ul {
  list-style-type: disc;
  padding-left: 1.25rem;
}
</style>
