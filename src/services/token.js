import Cookies from 'js-cookie';

const TOKEN_KEY = 'bentok';

const TokenService = {
  getToken() {
    return Cookies.get(TOKEN_KEY) || '';
  },

  saveToken(token) {
    Cookies.set(TOKEN_KEY, token, {
      expires: 3 * 31
    });
  },

  removeToken() {
    Cookies.remove(TOKEN_KEY, { path: '' });
  }
};

export default TokenService;
