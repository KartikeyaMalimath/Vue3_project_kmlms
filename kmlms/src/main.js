import { createApp } from 'vue'
import App from './App.vue'
import vuetify from "./plugins/vuetify";
import { createPinia } from 'pinia'
import router from "./routes";
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import CKEditor from '@ckeditor/ckeditor5-vue';


const app = createApp(App)
const piniaInstance = createPinia()
piniaInstance.use(piniaPluginPersistedState)

app.use(piniaInstance)
app.use(router);
app.use(vuetify);
app.use(CKEditor);
app.mount('#app')
