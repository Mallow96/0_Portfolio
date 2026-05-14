<script setup>
import Logo from "./logo.vue";
import MyNav from "../components/for-header/nav.vue";
import { ref } from "vue";

const headerExpand = ref(false);

const toggleHeader = () => {
  headerExpand.value = !headerExpand.value;
};
</script>

<template>
  <header class="flex justify-end items-center h-12">
    <!-- 使用 Transition 包裹需要動畫的元素 -->
    <transition name="expand">
      <div
        v-if="headerExpand"
        class="header-wrapper flex justify-between items-center py-0.5"
      >
        <router-link :to="{ name: 'main' }">
          <Logo />
        </router-link>
        <MyNav />
      </div>
    </transition>

    <button
      class="menu-wrapper"
      :class="{ 'menu-active': headerExpand }"
      @click="toggleHeader()"
    >
      <!-- <transition name="expand">
        <p v-if="headerExpand">Menu</p>
      </transition> -->

      <i class="fa-solid fa-bars"></i>
    </button>
  </header>
</template>

<style scoped>
header {
  min-height: var(--header-h);
  padding: var(--header-padding-y) var(--header-padding-x);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
}

.header-wrapper {
  border: 1px solid white;
  border-radius: 99rem;
  padding-left: var(--header-padding-x);
  padding-right: calc(var(--header-padding-x) * 2);

  background-color: var(--color-bg-header);
  backdrop-filter: blur(4px);

  width: 100%; /* 展開後 */
  height: 100%; /* 展開後 */
}

.menu-wrapper {
  font-size: 1.4rem;
  padding: 0.45rem 0.65rem;
  border: 1px solid white;
  border-radius: 0.6rem;
  position: absolute;
  right: calc(var(--header-padding-x) * 1.5);
}

.menu-wrapper:hover {
  background-color: var(--color-bg-secondary-btn-hover);
}

.menu-active {
  background-color: var(--color-bg-secondary-btn-hover);
}

.menu-active.menu-wrapper:hover {
  background-color: var(--color-bg-secondary-btn);
}

/* --- Transition  --- */

.expand-enter-active {
  transition:
    opacity 0.3s ease-out 0.1s,
    width 0.4s ease-in,
    height 0.1s ease-in;
  overflow: hidden;
}

.expand-leave-active {
  transition:
    opacity 0.2s ease-in 0.4s,
    width 0.6s ease-in,
    height 0.2s ease-in 1s;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  width: 0;
  height: 0;
  opacity: 0;
}
</style>
