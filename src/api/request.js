import axios from 'axios';

export const request = ({url, data, params,method}) =>{
    const variables = {
        url,
        data,
        params,
        method,
    };
    return axios(variables);
}