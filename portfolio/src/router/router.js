import { createRouter, createWebHashHistory } from "vue-router";

import Main from "../pages/0_main.vue";
import About from "../pages/1_about.vue";
import Skills from "../pages/2_skills.vue";
import Experience from "../pages/3_experience.vue";
import Portfolio from "../pages/4_porfolio.vue";
import Contact from "../pages/5_contact.vue";
import PortSub from "../pages/4-1_port-sub.vue";

const routes = [
  { path: "/", name: "main", component: Main },
  { path: "/about-me", name: "about", component: About },
  { path: "/skills", name: "skills", component: Skills },
  { path: "/experience", name: "experience", component: Experience },
  { path: "/portfolio", name: "portfolio", component: Portfolio },
  { path: "/portfolio/:id", name: "portSub", component: PortSub },
  { path: "/contact", name: "contact", component: Contact },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
