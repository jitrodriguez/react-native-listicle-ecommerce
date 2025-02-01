import axios from 'axios';
import Config from 'react-native-config';

export const request = ({path,method,data})=>{
    return axios({
        method: method || 'get',
        url: `${Config.API_URL}${path}`,
        data,
    })
}