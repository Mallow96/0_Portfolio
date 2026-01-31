import { createRouter, createWebHashHistory } from "vue-router";

import Main from "../pages/0_main.vue";
import About from "../pages/1_about.vue";
import Skills from "../pages/2_skills.vue";
import Experience from "../pages/3_experience.vue";
import Portfolio from "../pages/4_porfolio.vue";
// import Contact from "../pages/5_contact.vue";
import PortSub from "../pages/4-1_port-sub.vue";

const routes = [
  { path: "/", name: "main", component: Main },
  { path: "/about-me", name: "about", component: About },
  { path: "/skills", name: "skills", component: Skills },
  { path: "/experience", name: "experience", component: Experience },
  { path: "/portfolio", name: "portfolio", component: Portfolio },
  { path: "/portfolio/:id", name: "portSub", component: PortSub },
  { path: "/contact", name: "contact", component: Main },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    // 1. 如果有之前的捲動紀錄（例如按瀏覽器「上一頁」），回到該位置
    if (savedPosition) {
      return savedPosition;
    }

    // 2. 關鍵：如果目的地網址帶有 # (hash)，例如 #contact
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth", // 平滑捲動
        top: 80, // 偏移量：避免標題被 Fixed Header 遮住，根據你的 Header 高度調整
      };
    }

    // 3. 預設：換頁時回到頁面最上方
    return { top: 0 };
  },
});

export default router;
