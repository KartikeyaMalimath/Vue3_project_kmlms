import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import pinia from '@/store'
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import 'vue-material-design-icons/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from '@/dashboard.js';

const appInstance = createApp(App);
appInstance.use(router);
appInstance.use(pinia);
appInstance.use(Dashboard);
appInstance.mount('#app');
