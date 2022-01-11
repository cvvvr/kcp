import './App.css';
// import Phone from "./components/Phone";
import Login from "./components/Login/Login";
import {message} from 'antd';
import axios from "axios";

function App(){


  return (
    <div className="App">
      <Login></Login>
      {/*<Button type='primary' onClick={ register }>register</Button>*/}
      {/*<Button type='primary' onClick={ login }>login</Button>*/}
      {/*<Button type='primary' onClick={ getUser }>getUser</Button>*/}
      {/*<Phone></Phone>*/ }
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
