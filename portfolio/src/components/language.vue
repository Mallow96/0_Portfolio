<script setup>
import { useLangStore } from "../store/store-lan"; // 假設你的 Pinia Store 路徑
const langStore = useLangStore();

const toggleLang = () => {
  if (langStore.currentLang === "zh") {
    langStore.setLanguage("en");
  } else {
    langStore.setLanguage("zh");
  }
};
</script>

<template>
  <div id="lang-switch" @click="toggleLang()">
    <p>{{ $t("settings.language") }}</p>

    <div class="lang-tabs">
      <div
        class="lang-tabs__slider"
        :class="langStore.currentLang === 'en' ? 'is-en' : 'is-zh'"
      ></div>

      <button
        type="button"
        class="lang-tabs__btn"
        :class="{ 'is-active': langStore.currentLang === 'zh' }"
      >
        <span>中文</span>
      </button>

      <button
        type="button"
        class="lang-tabs__btn"
        :class="{ 'is-active': langStore.currentLang === 'en' }"
      >
        <span>EN</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
#lang-switch {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.lang-tabs {
  position: relative;
  display: flex;
  width: var(--lang-swtich-tabs-w);
  height: var(--lang-swtich-tabs-h);
  border-radius: 10px;
  padding: 4px;
  pointer-events: none;
  border: 1px solid rgb(180, 180, 180);
  -webkit-tap-highlight-color: transparent;
}

/* 滑塊：在底層滑動的白色區塊 */
.lang-tabs__slider {
  position: absolute;
  top: 4px;
  left: 4px;
  /* 寬度為容器的一半減去內邊距 */
  width: calc(50% - 4px);
  height: calc(100% - 8px);
  background-color: var(--color-bg-main-btn);
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  /* 動畫關鍵：使用 !important 確保不受 Vue 重新渲染干擾 */
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
  z-index: 1;
}

/* 滑塊位移邏輯 */
.lang-tabs__slider.is-zh {
  transform: translateX(0);
}

.lang-tabs__slider.is-en {
  transform: translateX(100%);
}

/* 按鈕樣式 */
.lang-tabs__btn {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 2; /* 確保文字在滑塊上方 */
  transition: color 0.3s ease;
}

.lang-tabs__btn span {
  font-size: var(--lang-swtich-tabs-fw);
  font-weight: bold;
  color: var(--lang-swtich-tabs-text);
}

.lang-tabs__btn.is-active span {
  color: var(--lang-swtich-tabs-text-active);
}
</style>
