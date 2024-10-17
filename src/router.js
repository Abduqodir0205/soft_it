import { createWebHistory, createRouter } from 'vue-router';

import HomeView from './views/homeView.vue';
import AboutView from './views/aboutView.vue';
import ServicesView from './views/servicesView.vue';
import PortfolioView from './views/portfolioView.vue';
import VacanciesView from './views/VacanciesView.vue';
import BlogView from './views/blogView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about-us', component: AboutView },
  { path: '/services', component: ServicesView },
  { path: '/portfolio', component: PortfolioView },
  { path: '/vacancies', component: VacanciesView },
  { path: '/blog', component: BlogView },
];

const router = createRouter({
  history: createWebHistory(), // Memory history o'rniga Web history qo'llaniladi
  routes,
});

export default router;
