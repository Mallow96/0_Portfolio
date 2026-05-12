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
  <nav class="h-12">
    <ol class="flex justify-between items-center h-full gap-2">
      <li
        v-for="(item, index) in $tm('navItems')"
        :key="index"
        class="basis-full h-full w-full hover:text-blue-400 hover:border-b-2 hover:border-blue-400"
      >
        <a
          @click="handleNavClick(index)"
          class="flex justify-center items-center cursor-pointer w-full h-full"
        >
          {{ $rt(item) }}
        </a>
      </li>
      <li class="ms-3"><Settings /></li>
    </ol>
  </nav>
</template>

<style scoped>
nav {
  min-width: 30rem;
}
</style>
