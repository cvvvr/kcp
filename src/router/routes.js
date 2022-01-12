import App from '../App';
import Login from "../components/Login/Login";
import Phone from "../components/Phone";
const routes = [
  {
    path: '/login',
    component: Login,
    exact: true,
    name: "login"
  },
  {
    path: '/' ,//默认首加
    component:App ,
    exact: true,
    name:"首页"
  },
  {
    path: '/phone',
    exact: true,
    component: Phone,
    name: "phone"
  },
];
export {routes}
