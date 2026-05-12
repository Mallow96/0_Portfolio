import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "@fontsource/material-symbols-outlined";
import { createPinia } from "pinia";
import i18n from "./i18n";
import router from "./router/router";

const pinia = createPinia();

createApp(App).use(pinia).use(i18n).use(router).mount("#app");
