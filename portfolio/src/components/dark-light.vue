<script setup>
import { useStore } from "../store/store-main";

const mainStore = useStore();
</script>

<template>
  <label id="view-mode-switch">
    <span class="bool-toggle__label">
      {{ $t(mainStore.isDark ? "settings.darkMode" : "settings.lightMode") }}
    </span>
    <input
      type="checkbox"
      class="bool-toggle__input"
      v-model="mainStore.isDark"
    />
    <span
      class="bool-toggle__slider"
      :class="!mainStore.isDark ? 'bg-gray-200' : 'bg-gray-400'"
    >
      <span class="bool-toggle__dot">
        <span
          class="material-symbols-outlined"
          :class="!mainStore.isDark ? 'text-yellow-500' : 'text-gray-400'"
        >
          {{ mainStore.isDark ? "dark_mode" : "light_mode" }}
        </span>
      </span>
    </span>
  </label>
</template>

<style scoped>
#view-mode-switch {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
  justify-content: space-between;
}

.bool-toggle__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
}

.bool-toggle__slider {
  position: relative;
  width: 48px;
  height: 20px;
  border-radius: 999px;
  transition: background-color 0.3s ease;
  overflow: visible;
  display: flex;
  align-items: center;
}

.bool-toggle__dot {
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  top: calc((20px - 28px) / 2);
  left: 0;
  transform: translateX(-4px) !important;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
  will-change: transform;
}

.bool-toggle__input:checked + .bool-toggle__slider .bool-toggle__dot {
  transform: translateX(24px) !important;
}

.material-symbols-outlined {
  font-size: 20px;
  user-select: none;
  transition: color 0.3s ease, font-variation-settings 0.3s ease,
    opacity 0.2s ease;

  display: block;
  user-select: none;
}
</style>
