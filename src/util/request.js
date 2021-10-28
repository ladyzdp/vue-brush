import axios from "axios";
const baseUrl = process.env.NODE_ENV === 'production' ? '' : '';
import storage from "@/util/storageControl";

const service = axios.create({
  baseURL: `/${baseUrl}`,
  timeout: 15000, 
});
// 添加请求拦截器
service.interceptors.request.use(
  (response) => {

    let token = storage.getToken();

    if (response.method == 'post') {
      response.data = {
        ...response.data,
        _t: Date.parse(new Date()) / 1000
      };
    } if (response.method == 'get') {
      response.params = {
        _t: Date.parse(new Date()) / 1000,
        ...response.data
      };
    }
    if (token) {
      //将token放到请求头发送给服务器,将tokenkey放在请求头中
      response.headers["Token"] = token;
      return response;
    }

    return response;
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error.response);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error.response);
  }
);
function errorControl(err){
  if (err && err.status) {
    switch (err.status) {
      case 400:
        err.message = '错误请求';
        break;
      case 401:
        err.message = '未授权，请重新登录';
        break;
      case 403:
        err.message = '拒绝访问';
        break;
      case 404:
        err.message = '请求错误,未找到该资源';
        break;
      case 405:
        err.message = '请求方法未允许';
        break;
      case 408:
        err.message = '请求超时';
        break;
      case 500:
        err.message = '服务器端出错';
        break;
      case 501:
        err.message = '网络未实现';
        break;
      case 502:
        err.message = '网络错误';
        break;
      case 503:
        err.message = '服务不可用';
        break;
      case 504:
        err.message = '网络超时';
        break;
      case 505:
        err.message = 'http版本不支持该请求';
        break;
      default:
        err.message = `连接错误${err.status}`;
    }
    let errData = {
      message: err.status,
      description: err.message
    };
    console.log(errData)
    // notification.error(errData);
}
}
const request = (params) => {
  return new Promise((resolve, reject) => {
    service(params)
      .then((res) => {

        resolve(res);
      })
      .catch((err) => {
        // const { status } = err;
        errorControl(err)
        reject(err);
      });
  });
};
export default request;