import { createI18n } from "vue-i18n";
import zh from "./zh.json";
import en from "./en.json";

// 建立實例
export const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式 (Vue 3 必設)
  locale: "zh", // 預設語言
  fallbackLocale: "en", // 找不到翻譯時的回退語言
  messages: {
    zh,
    en,
  },
});

export default i18n;
