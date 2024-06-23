import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "vee-validate";
import "yup"
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";

loadFonts();

const AppInstance = createApp(App);
AppInstance.use(router);
AppInstance.use(vuetify);
AppInstance.mount("#app");
