import './css/style.css';
import {useState} from "react";
export default function Login(){
  const [islogin,setIslogin] = useState(true)

  const changeStatus = ()=>{
    const newIslogin = !islogin;
    setIslogin(newIslogin);
  }

  return (
    <div className="main">
      {islogin && (
        <div className="container b-container" id="b-container">
          <form className="form" id="b-form">
            <h2 className="form_title title">登录</h2>
            <div className="form__icons">
              <img className="form__icon" src="img/3.svg" alt=""/>
            </div>
            <span className="form__span">or use your email account</span>
            <input className="form__input" type="text" placeholder="Email"/>
            <input className="form__input" type="password" placeholder="Password"/>
            <p className="form__link">忘记密码?</p>
            <button className="form__button button submit" type="button">登录</button>
          </form>
        </div>
      )}
      {!islogin && (
        <div className="container a-container" id="a-container">
          <form className="form" id="a-form">
            <h2 className="form_title title">注册</h2>
            <div className="form__icons">
              <img className="form__icon" src="img/1.svg" alt=""/>
              <img className="form__icon" src="img/2.svg" alt=""/>
            </div>
            <span className="form__span">or use email for registration</span>
            <input className="form__input" type="text" placeholder="Name"/>
            <input className="form__input" type="text" placeholder="Email"/>
            <input className="form__input" type="password" placeholder="Password"/>
            <button className="form__button button submit" type="button">注册</button>
          </form>
        </div>
      )}

      <div className="switch" id="switch-cnt">
        <div className="switch__circle"/>
        <div className="switch__circle switch__circle--t"/>
          <div className="switch__container" id="switch-c1">
            <h2 className="switch__title title">{islogin ? '欢迎回来！' : '欢迎新朋友'}</h2>
            <p className="switch__description description">To keep connected with us please login with your personal info</p>
            <button className="switch__button button switch-btn" onClick={changeStatus}>{islogin ? '去注册' : '去登陆'}</button>
          </div>
      </div>
    </div>
)
}
