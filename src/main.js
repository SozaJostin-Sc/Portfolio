import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const app = createApp(App);
const pinia = createPinia(); // Crea la instancia de Pinia

app.use(pinia); // Usa Pinia antes de montar la aplicación
app.mount("#app");
