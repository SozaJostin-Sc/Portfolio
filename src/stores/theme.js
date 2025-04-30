import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const isDarkMode = ref(false);

  const applyTheme = () => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode.value ? "dark" : "light"
    );
  };

  const saveThemePreference = () => {
    localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
  };

  const loadThemePreference = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    isDarkMode.value = savedTheme ? savedTheme === "dark" : prefersDark;
    applyTheme();
  };

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    applyTheme();
    saveThemePreference();
  };

  // Cargar tema al inicializar
  onMounted(loadThemePreference);

  return { isDarkMode, toggleTheme };
});
