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
  width: 120px; /* 根據文字長度調整寬度 */
  height: 36px;
  background-color: #374151; /* gray-700, 或是用 rgba(0,0,0,0.2) */
  border-radius: 10px;
  padding: 4px;
  pointer-events: none; /* 關鍵：讓點擊事件「穿透」到外層 div，統一處理切換 */
  border: 1px solid rgba(255, 255, 255, 0.1);
  /* 避免點擊時出現藍框 */
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
  background-color: #ffffff;
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
  font-size: 14px;
  font-weight: 600;
  color: #9ca3af; /* gray-400 */
}

/* 被選中時的文字顏色 */
.lang-tabs__btn.is-active span {
  color: #111827; /* gray-900 (在白色滑塊上顯示深色字) */
}
</style>
