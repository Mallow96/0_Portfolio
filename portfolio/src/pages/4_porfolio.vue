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
    <div class="container">
      <div class="grid grid-cols-3 gap-4">
        <div
          v-for="item in portStore.projects"
          :key="item.id"
          class="card flex flex-col gap-4"
        >
          <div class="card-top">
            <img
              v-if="item.image"
              :src="item.image"
              :alt="item.title[langStore.currentLang]"
            />
          </div>

          <div class="card-body flex flex-col gap-2">
            <p class="category">{{ item.category[langStore.currentLang] }}</p>
            <h4 class="title">{{ item.title[langStore.currentLang] }}</h4>
            <p class="description">
              {{ item.description[langStore.currentLang] }}
            </p>
            <!-- <ul class="details">
              <li
                v-for="(detail, index) in item.details[langStore.currentLang]"
                :key="index"
              >
                {{ detail }}
              </li>
            </ul> -->
            <ul class="tags flex gap-2">
              <li v-for="(tag, index) in item.tag" :key="index">
                {{ tag[langStore.currentLang] }}
              </li>
            </ul>
          </div>

          <div class="card-foot flex gap-4 px-4 pb-4">
            <button type="button">
              {{ $tm("portfolio.btnLink") }}
              <i :class="$tm('portfolio.linkIcon')"></i>
            </button>
            <button type="button">
              <i :class="$tm('portfolio.codeIcon')"></i>
              {{ $tm("portfolio.btnCode") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  border: 1px solid rgb(180, 180, 180);
  border-radius: 0.75rem;
  overflow: hidden;
}

.card-body {
  padding: 0 1rem;
}

.card-body .title {
  text-align: start;
  font-weight: bold;
}

.category {
  font-size: 0.875rem;
  color: rgb(81, 157, 201);
}

.details {
  list-style-type: disc;
  padding-left: 1.25rem;
}

.tags {
  list-style-type: none;
}

.tags li {
  background-color: var(--color-bg-tag);
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  font-size: 0.75rem;
}

.card-foot button {
  background-color: var(--color-bg-secondary-btn);
  border-radius: 0.5rem;
  padding: 0.3rem 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.card-foot button:hover {
  background-color: var(--color-bg-secondary-btn-hover);
}
</style>
