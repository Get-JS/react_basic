import Axios from 'axios';
import { getAccessToken, getRefreshToken, setAccessToken, removeAccessToken } from 'utils/http/auth';
import queryData from './queryData';
import { SERVER_TOKEN, SERVER_TOKEN_NOT_VALID } from 'setting';

/**
 * 	* Basic
 * 	* Security scheme type:	HTTP
 * 	* HTTP Authorization Scheme	basic
 
 * * JWT
 * * Security scheme type: API Key
 * * Header parameter name: Authorization
*/

const axiosSetting = {
  scheme: 'http',
  host: '15.165.198.243',
  api: '/api/v1',
  port: '',
  server: function () {
    return (this.scheme ? this.scheme + ':' : '') + '//' + this.host + this.api + (this.port ? ':' + this.port : '');
  },
  redirectPage: () => {
    window.location.href = '/';
  },
};

const api = {
  GET_TOKEN: 'user/token/', // * 토근 생성
  UPDATE_TOKEN: 'user/token/refresh/', // * 토큰 갱신
  CHECK_TOKEN: 'user/token/verify/', // * 토큰 검사

  G_MEMBER_REGISTER: 'user/google/sign-up/', // * 구글 회원가입
  G_MEMBER_LOGIN: 'user/google/sign-in/', // * 구글 로그인

  N_MEMBER_REGISTER: 'user/sign-upss/', // * 일반 회원가입
  N_MEMBER_LOGIN: 'user/sign-in/', // * 일반 로그인

  MEMBER_LOGOUT: 'user/sign-out/', // * 로그아웃

  MEMBER: 'user/',

  NEWS: 'http://newsapi.org/v2/top-headlines',
};

const axios = Axios.create({
  baseURL: axiosSetting.server(),
  timeout: 10000,
});

// * Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) config.headers.Authorization = `${SERVER_TOKEN} ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (!error.response) {
      error['response'] = { data: { message: '네트워크 연결이 끊어져 있습니다.' } };
    }

    const status = error.response.status || '';
    const response = error.response.data || {};
    const originalRequest = error.config || {};
    const url = originalRequest.url || '';

    // API 호출 시, accessToken 만료
    if (status === 401 && url.indexOf(api.UPDATE_TOKEN) === -1 && response.code === SERVER_TOKEN_NOT_VALID) {
      const refreshToken = getRefreshToken();
      const checkToken = queryData['checkToken'];
      const updateToken = queryData['updateToken'];

      // token_not_valid => login(required)!!
      if (!refreshToken) axiosSetting.redirectPage();
      else updateToken.refresh = refreshToken;

      return await axios
        .post(api.UPDATE_TOKEN, updateToken)
        .then(async (response) => {
          if (!response.data) throw new Error();
          else {
            setAccessToken(response.data); // 만료되지 않은 경우, accessToken reSetting
            if (url.indexOf(api.CHECK_TOKEN) > -1) {
              const accessToken = getAccessToken();
              checkToken.token = accessToken;
              originalRequest.data = checkToken;
            }
            return await axios.request(originalRequest);
          }
        })
        .catch(() => {
          removeAccessToken(); // 만료된 경우, localStorage 삭제
          axiosSetting.redirectPage(); // token_not_valid login => login(required)!!
        });
    }
    // login 필수
    else if (status === 401 && ('' + response.detail).indexOf('authentication credentials') > -1) {
      axiosSetting.redirectPage(); // no authentication login!!
    }
    // 그 외는 서버에서 내리는 에러
    else return Promise.reject(error);
  },
);

export { axios, api };
