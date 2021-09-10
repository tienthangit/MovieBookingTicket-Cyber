import axios from "axios";

export const request = ({ url, data, params, method, headers }) => {
  const variables = {
    url,
    data,
    params,
    method,
    headers,
  };
  return axios(variables);
};
