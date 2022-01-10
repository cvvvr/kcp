import './App.css';
import Phone from "./components/Phone";
import {Button, message} from 'antd';
import {registerApi, loginApi, getUserApi} from "./servers/servers";
import axios from "axios";

function App(){
  const register = () => {
    const user = {
      username: 'xiaocheng',
      password: '123'
    }
    registerApi(user).then(
      res => {
        message.success(res.data.message, 2);
      }
    ).catch(
      err => {
        message.error(err.response.data.message, 2);
      }
    );
  }
  const login = () => {
    const user = {
      username: 'xiaocheng',
      password: '123'
    }
    loginApi(user).then(
      res => {
        console.log(res.data);
        window.localStorage.setItem('token', res.data.token);
        message.success(res.data.message, 2);
      }
    ).catch(
      err => {
        message.error(err.response.data.message, 2);
      }
    );
  }

  const getUser = () => {
    console.log(window.localStorage.getItem("token"));
    getUserApi().then(
      res => {
        console.log(res.data);
      }
    ).catch(
      err => {
        console.log(err)
        message.error('获取失败', 2);
      }
    );
  }

  return (
    <div className="App">
      <Button type='primary' onClick={ register }>register</Button>
      <Button type='primary' onClick={ login }>login</Button>
      <Button type='primary' onClick={ getUser }>getUser</Button>
      {/*<Phone></Phone>*/ }
    </div>
  );
}

axios.interceptors.request.use(function (config) {
  console.log(config,'config');
  if(config.url === '/api/register' || config.url === '/api/login'){
    return config;
  }

  let token = window.localStorage.getItem("token")
  if (token !== null) {
    //将token放到请求头发送给服务器,将tokenkey放在请求头中
    config.headers.accessToken = token;
    return config;
  } else {
    console.log(token,333);
    message.error('登陆过期，请先登陆！')
  }
}, function (error) {
  return Promise.reject(error);
});

export default App;
