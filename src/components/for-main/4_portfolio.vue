<script setup>
import { onMounted } from "vue";
import { usePortStore } from "../../store/store-portfolio";
import { useLangStore } from "../../store/store-lan"; // 假設你的 Pinia Store 路徑
import { useRouter } from "vue-router";

const portStore = usePortStore();
const langStore = useLangStore();
const router = useRouter();

const handleClickMore = () => {
  router.push("/portfolio");
};

onMounted(() => {
  portStore.fetchProjects();
});
</script>

<template>
  <section id="portfolio" class="main-section">
    <div class="container flex flex-col gap-13">
      <h3>{{ $t("portfolio.portTitle") }}</h3>
      <div class="w-full grid grid-cols-4 gap-4">
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
      <div class="bot w-full flex justify-center">
        <button
          type="button"
          class="btn-more px-4 py-2 rounded-full"
          @click="handleClickMore()"
        >
          {{ $t("portfolio.btnP") }}<i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
#portfolio {
  background-color: var(--color-bg-home-skills);
}

.card {
  border: 1px solid rgb(180, 180, 180);
  border-radius: 0.75rem;
  padding: 1rem;
}

.btn-more {
  background-color: var(--color-bg-main-btn);
  color: var(--color-btn-text);
}

.btn-more:hover {
  background-color: var(--color-bg-main-btn-hover);
}

ul {
  list-style-type: disc;
  padding-left: 1.25rem;
}

i {
  font-size: 0.75rem;
}
</style>
