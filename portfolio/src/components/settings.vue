<script setup>
import ModeSwitch from "./dark-light.vue";
import LanSwtich from "./language.vue";
import { ref } from "vue";

const isToggled = ref(false);

const handleToggle = () => {
  isToggled.value = !isToggled.value;
};
</script>

<template>
  <div
    id="settings-container"
    @mouseenter="handleToggle()"
    @mouseleave="handleToggle()"
  >
    <button type="button" class="settings-button">
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
#settings-container {
  position: relative;
}

#settings-menu {
  width: 300px;
  height: 120px;

  position: absolute;
  right: 0;
  transform-origin: top;
  perspective: 1000px;
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
