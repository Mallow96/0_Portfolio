import { defineStore } from "pinia";
import { useDark } from "@vueuse/core";

//setup 語法
export const useStore = defineStore("main", () => {
  // ref()
  const isDark = useDark();

  //computed
  //function()

  return { isDark };
});
