import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'


// Import your components
const HomePage = () => import('../components/HomePage.vue');
const OurPlantations = () => import('../components/OurPlantations.vue');
const AboutUs = () => import('../components/AboutUs.vue');
const Documentations = () => import('../components/OurDocumentations.vue');

//Plantation
const PatPlant = () => import('../components/PatPlant.vue');
const SalPlant = () => import('../components/SalPlant.vue');
const KwtPlant = () => import('../components/KwtPlant.vue');
const KawPlant = () => import('../components/KawPlant.vue');
const RusPlant = () => import('../components/RusPlant.vue');

const routes = [
  {
    path: '/', // Ensure this is '/' for the root path
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/plantation',
    name: 'OurPlantation',
    component: OurPlantations,
    
  },
  {
    path: '/patingaskotuwa',
    name: 'PatPlant',
    component: PatPlant
  },
  {
    path: '/salagama',
    name: 'SalPlant',
    component: SalPlant
  },
  {
    path: '/kawlupanella',
    name: 'KawPlant',
    component: KawPlant
  },
  {
    path: '/rusigama',
    name: 'RusPlant',
    component: RusPlant
  },
  {
    path: '/kawatayamuna',
    name: 'KwtPlant',
    component: KwtPlant
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/documentations',
    name: 'Documentations',
    component: Documentations
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
