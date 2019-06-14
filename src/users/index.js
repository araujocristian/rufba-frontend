//Components
import RegistrationPage from "./containers/RegistrationPage";
import LoginPage from "./containers/LoginPage";
import LogoutPage from "./containers/LogoutPage";
import ProfilePage from "./components/ProfilePage";
import UserValidate from './containers/UserValidate';
import UnauthenticatedRedirect from './containers/UnauthenticatedRedirect';
import userLoggedInConnector from './connectors/userLoggedInConnector';


import reducer from "./reducer";

export default reducer;

export { RegistrationPage, LoginPage, LogoutPage, ProfilePage, UserValidate, UnauthenticatedRedirect, userLoggedInConnector };
