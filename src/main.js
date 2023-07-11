import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";
import { registerAsyncComponent } from "./utils/import";
import { projectAuth } from "./configs/firebaseConfig";

let app;
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    registerAsyncComponent(app);
    app.use(router);
    app.mount("#app");
  }
});
