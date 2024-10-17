import { createApp } from 'vue';
import i18n from './i18n';
import App from './App.vue';
import router from './router'; // Routerni import qilasiz
import './assets/scss/root.scss';
import './style.css';
import './assets/scss/responsive.scss';

const app = createApp(App);

app.use(i18n);
app.use(router); // Routerni qo'shasiz
app.mount('#app');
