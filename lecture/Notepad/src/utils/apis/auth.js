import { axios, api } from 'utils/http/client';
import queryData from 'utils/http/queryData';
import { STORAGE } from 'setting';

const auth = {
  /**
   * * if false return, You Should be redirect page
   * @return {Promise}
   */
  tokenCheck: async function () {
    const accessToken = STORAGE.getItem('accessToken') || '';

    if (!accessToken) return false;
    else {
      // * Access Token의 만료기간을 확인한다. (CHECK_TOKEN API)
      try {
        const checkToken = queryData['checkToken'];
        checkToken.token = accessToken;

        const response = await axios.post(api.CHECK_TOKEN, checkToken);
        this.setAccessToken(response.data); // * 만료되지 않은 경우, token header 부여
        return true;
      } catch (error) {
        return false;
      }
    }
  },

  getAccessToken: function () {
    return STORAGE.getItem('accessToken') || null;
  },

  getRefreshToken: function () {
    return STORAGE.getItem('refreshToken') || null;
  },

  setAccessToken: function (token) {
    const accessToken = token.access || null;
    const refreshToken = token.refresh || null;
    STORAGE.setItem('accessToken', accessToken || STORAGE.getItem('accessToken'));
    STORAGE.setItem('refreshToken', refreshToken || STORAGE.getItem('refreshToken'));
  },

  removeAccessToken: function () {
    STORAGE.setItem('accessToken', '');
    STORAGE.setItem('refreshToken', '');
  },
};

export default auth;
