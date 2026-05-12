import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

//setup 語法
export const usePortStore = defineStore("portfolio", () => {
  // ref()
  const portfoliosURL = "../../public/portfolio.json";
  const projects = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  //computed

  //function()

  //fetch (axios)
  const fetchProjects = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await axios.get(portfoliosURL);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      projects.value = response.data;
    } catch (err) {
      error.value = "無法載入作品集資料！";
      console.error("API Error", err);
    } finally {
      isLoading.value = false;
    }
  };

  return { projects, isLoading, error, fetchProjects };
});
