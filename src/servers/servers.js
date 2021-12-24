import axios from "axios";

const api = (url, params, method) => {
  switch ( method ) {
    case 'post':
      return new Promise((resolve, reject) => {
        axios.post(url, {
          params: params
        }).then(res => {
          resolve(res);
        }).catch(err => {
            reject(err)
          }
        )
      })
    case 'get':
      return new Promise((resolve, reject) => {
        axios.get(url, {
          params: params
        }).then(res => {
          resolve(res);
        }).catch(err => {
            reject(err)
          }
        )
      })
  }
}

// 注册
export const registerApi = (params) => {
  return  api('/api/register', params, 'post');
}

// 登陆
export const loginApi = (params) => {
  return  api('/api/login', params, 'post');
}

// 登陆
export const getUserApi = (params) => {
  return  api('/api/getUser', params, 'post');
}