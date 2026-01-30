import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useStorage } from "@vueuse/core";
// 注意：這裡匯入的是你在項目中設定好的 i18n 實例
import i18n from "../i18n";

export const useLangStore = defineStore("lang", () => {
  // 持久化語言設定
  const currentLang = useStorage("user-language", "zh");

  const setLanguage = (lang) => {
    currentLang.value = lang;
    i18n.global.locale.value = lang;
    document.documentElement.setAttribute("lang", lang);
  };

  // 初始化（這在 Store 載入時會執行一次）
  setLanguage(currentLang.value);

  return { currentLang, setLanguage };
});
