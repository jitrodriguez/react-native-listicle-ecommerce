import axios from 'axios';
import Config from 'react-native-config';

export const request = ({ path, method, data }) => {
  console.log('request ==> ', `${Config.API_BASE_URL}${path}`, method, data);
  return axios({
    method: method || 'get',
    url: `${Config.API_BASE_URL}${path}`,
    data
  });
};

export const addTokenToRequest = token => {
  axios.defaults.headers.common.Authorization = `${token}`;
};
