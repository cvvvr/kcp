import './App.css';
import {message} from 'antd';
import axios from "axios";
import Login from "./components/Login/Login";
import Main from "./components/Main";
import UserInfo from "./components/userInfo/UserInfo";
import Game from "./components/game/Game";
import {Router, Route, hashHistory ,IndexRoute} from "react-router";
import React from "react";

function App(){

  return (
    <div className="App">
      <Router history={hashHistory}>
          <Route path="/" component={Login}/>
          <Route path="/login" component={Login}/>
        <Route path="/main" component={Main}>
          <IndexRoute component={UserInfo}/>
          <Route path="/userInfo" component={UserInfo}/>
          <Route path="/game" component={Game}/>
        </Route>
      </Router>
    </div>
  );
}

axios.interceptors.request.use(function (config) {
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
