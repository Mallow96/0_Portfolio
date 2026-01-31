<script setup>
import { useRoute, useRouter } from "vue-router";
import Settings from "./settings.vue";

const router = useRouter();
const route = useRoute();

const handleNavClick = async (target, id = null) => {
  if (target === "contact") {
    if (route.name !== "main") {
      await router.push({ name: "main", hash: "#contact" });
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    router.push({ name: target });
  }
};
</script>

<template>
  <nav>
    <ol class="flex justify-between items-center gap-7">
      <li v-for="(item, index) in $tm('navItems')" :key="index">
        <a @click="handleNavClick(index)">
          {{ $rt(item) }}
        </a>
      </li>
      <li><Settings /></li>
    </ol>
  </nav>
</template>

<style scoped></style>
