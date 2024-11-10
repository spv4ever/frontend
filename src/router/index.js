import { createRouter, createWebHistory } from 'vue-router'; // Importa createRouter y createWebHistory
import RegisterPage from '../components/RegisterPage.vue';
import LoginPage from '../components/LoginPage.vue';
import MovimientosCuenta from '../components/MovimientosCuenta.vue';
import BalanceCuenta from '../components/BalanceCuenta.vue';
import AgregarMovimiento from '../components/AgregarMovimiento.vue';

const routes = [
  { path: '/agregar-movimiento', component: AgregarMovimiento },
  { path: '/registro', component: RegisterPage },
  { path: '/login', component: LoginPage },
  { path: '/movimientos', component: MovimientosCuenta },
  { path: '/balance', component: BalanceCuenta }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
