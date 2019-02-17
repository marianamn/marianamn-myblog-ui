import RequestInstance from "../utils/request";
import apiEndpoint from "../configs/index";

const request = RequestInstance.request;

const get = async (requestURL: string) => {
  const options = {
    method: "GET",
  };

  return request(`${apiEndpoint}/${requestURL}`, options);
};

const post = async (requestURL: string, payload: any) => {
  const options = {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return request(`${apiEndpoint}/${requestURL}`, options);
};

const put = async (requestURL: string, payload: any) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return request(`${apiEndpoint}/${requestURL}`, options);
};

const remove = async (requestURL: string, payload: any) => {
  const options = {
    method: "DELETE",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return request(`${apiEndpoint}/${requestURL}`, options);
};

export default {
  get,
  post,
  put,
  remove,
};
