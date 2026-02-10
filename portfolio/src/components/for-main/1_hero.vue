<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const handleClickPortfolio = () => {
  router.push({ name: "portfolio" });
};

const handleClickContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <section id="hero" class="main-section">
    <div class="container w-full h-96 flex flex-col items-center gap-8">
      <h3 class="greeting text-5xl font-bold mb-4">
        {{ $t("hero.greeting") }}
        <span class="name">{{ $t("hero.name") }}</span>
      </h3>
      <p class="description flex gap-1 text-2xl">
        <span> {{ $t("hero.description") }} </span>
        <span class="text-blue-400 font-semibold">
          {{ $t("hero.skills.translation") }}
        </span>
        <span>{{ $t("hero.punctuation") }}</span>
        <span class="text-purple-500 font-semibold">
          {{ $t("hero.skills.localization") }}
        </span>
        <span>{{ $t("hero.and") }}</span>
        <span class="text-green-600 font-semibold">
          {{ $t("hero.skills.web") }}
        </span>
      </p>
      <div class="btns w-full flex gap-8 justify-center">
        <button
          @click="handleClickPortfolio()"
          class="btn-port bg-(--color-bg-main-btn) text-white hover:bg-(--color-bg-main-btn-hover)"
        >
          {{ $t("hero.btnP") }}
        </button>
        <button
          @click="handleClickContact()"
          class="bg-(--color-bg-secondary-btn) hover:bg-(--color-bg-secondary-btn-hover)"
        >
          {{ $t("hero.btnC") }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.greeting > .name {
  background: linear-gradient(90deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btns > button {
  padding: 0.75rem 1.5rem;
  border-radius: 100rem;
}

.btns > button:hover {
  transform: translateY(-1px);
  transition: all 0.3s ease;
}

.btns > button:active {
  scale: 95%;
}
</style>
