import axios from "axios";

export const request = ({ url, body, params, method, headers }) => {
  const variables = {
    url,
    data:body,
    params,
    method,
    headers,
  };
  return axios(variables);
};
