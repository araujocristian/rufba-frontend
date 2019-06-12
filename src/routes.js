import { RegistrationPage, LoginPage, ProfilePage, LogoutPage, Form, MealForm} from "./users";
import {Home} from './home'

const routes =  [
  {
    path:'/',
    component: Home,
    exact: true,
  },
  {
    path: '/cadastro',
    component: RegistrationPage,
  },
  {
    path:'/login',
    component: LoginPage,
  },
  {
    path: '/logout',
    component: LogoutPage,
  },
  {
    path: '/perfil',
    component: ProfilePage,
  },
  {
    path: '/form',
    component: Form,
  },
  {
    path: '/formulario',
    component: MealForm,
  }

];

export default routes;