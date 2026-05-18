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
      <transition name="fade">
        <span v-if="!headerExpand" class="menu-text">Menu</span>
      </transition>

      <i class="fa-solid fa-bars menu-icon"></i>
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

.menu-text {
  width: 100%; /* 展開後 */
  height: 100%; /* 展開後 */
}

.menu-icon,
.menu-text {
  font-size: 1rem;
}

.menu-icon {
  margin: 0 0.3rem;
}

.menu-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-bg-main-btn);
  color: var(--color-btn-text);

  padding: 0.45rem 0.75rem;
  /* border: 1px solid var(--color-btn-text); */
  border-radius: 99rem;
  position: absolute;
  right: calc(var(--header-padding-x) * 1.5);
  min-height: 2.75rem;
}

.menu-wrapper:hover {
  background-color: var(--color-bg-main-btn-hover);
}

.menu-active {
  background-color: var(--color-bg-main-btn-hover);
  border-radius: 0.6rem;

  transition:
    background-color 0.3s ease,
    border-radius 0.3s ease-out 0.2s,
    gap 0.3s ease-out 0.5s;
}

.menu-active.menu-wrapper:hover {
  background-color: var(--color-bg-main-btn);
}

/* --- Transition: header  --- */

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

/* transition: menu button */

.fade-enter-active {
  /* 文字進入動畫與 border-radius 延遲同步 */
  transition: all 0.3s ease-out 0.6s;
  overflow: hidden;
}

.fade-leave-active {
  /* 展開時文字立刻消失 */
  transition: all 0.2s ease-in;
  overflow: hidden;
}

.fade-enter-from,
.fade-leave-to {
  max-width: 0;
  opacity: 0;
  margin-right: 0;
}

.fade-enter-to,
.fade-leave-from {
  max-width: 100px;
  opacity: 1;
}
</style>
