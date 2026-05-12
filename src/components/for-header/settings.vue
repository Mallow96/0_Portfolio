<script setup>
import ModeSwitch from "./dark-light.vue";
import LanSwtich from "./language.vue";
import { ref } from "vue";

const isToggled = ref(false);
let delayTimer = null;

const openMenu = () => {
  isToggled.value = true;
  if (delayTimer) {
    clearTimeout(delayTimer);
  }
};

const closeMenuDelayed = () => {
  delayTimer = setTimeout(() => {
    isToggled.value = false;
  }, 300);
};
</script>

<template>
  <div
    id="settings-container"
    @mouseenter="openMenu()"
    @mouseleave="closeMenuDelayed()"
  >
    <button type="button" id="settings-btn">
      <span class="material-symbols-outlined"> settings </span>
    </button>

    <Transition name="drop">
      <div
        id="settings-menu"
        class="bg-gray-700 p-4 flex flex-col gap-4 swing-bottom"
        v-show="isToggled"
      >
        <ModeSwitch />
        <LanSwtich />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.material-symbols-outlined {
  display: block;
  font-size: var(--settings-icon-size);
}

#settings-container {
  position: relative;
}

#settings-menu {
  background-color: var(--color-bg-settings);

  width: var(--settings-menu-w);
  height: auto;
  min-height: 120px;
  border-radius: 0.7rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);

  position: absolute;
  top: calc(
    (var(--header-h) - var(--settings-icon-size)) / 2 +
      var(--settings-icon-size)
  );
  right: 0;
  transform-origin: top;
  perspective: 1000px;

  z-index: 10;
}

#settings-btn {
  aspect-ratio: 1 / 1;
  display: block;
}

.drop-enter-active {
  animation: flip-in 0.5s ease-out;
  backface-visibility: hidden;
}

.drop-leave-active {
  animation: flip-out 0.3s ease-in;
  backface-visibility: hidden;
}

@keyframes flip-in {
  0% {
    opacity: 0;
    transform: rotateX(180deg);
  }

  70% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
    transform: rotateX(0deg);
  }
}

@keyframes flip-out {
  0% {
    opacity: 1;
    transform: rotateX(0deg);
  }

  100% {
    opacity: 0;
    transform: rotateX(90deg);
  }
}
</style>
