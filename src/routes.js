import { RegistrationPage, LoginPage, ProfilePage, LogoutPage} from "./users";
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
];

export default routes;