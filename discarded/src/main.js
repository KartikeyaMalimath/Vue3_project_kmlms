import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import pinia from '@/store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'; // Add this line
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/assets/styles/tailwind.css";

library.add(fas);
library.add(far);
library.add(fab);

const appInstance = createApp(App);
appInstance.use(router);
appInstance.use(pinia);
appInstance.component('font-awesome-icon', FontAwesomeIcon);
appInstance.mount('#app');
