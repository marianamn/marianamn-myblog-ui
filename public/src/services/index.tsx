import RequestInstance from "../utils/request";
import apiEndpoint from "../configs/index";

const request = RequestInstance.request;

const getJson = async (requestURL: string) => {
  const options = {
    method: "GET",
  };

  return request(`${apiEndpoint}/${requestURL}`, options);
};

const postJson = async (requestURL: string, payload: any) => {
  const options = {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return request(`${apiEndpoint}/${requestURL}`, options);
};

const postFormData = async (requestURL: string, payload: any) => {
  const options = {
    method: "POST",
    body: payload,
  };

  return request(`${apiEndpoint}/${requestURL}`, options);
};

const putJson = async (requestURL: string, payload: any) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return request(`${apiEndpoint}/${requestURL}`, options);
};

const removeJson = async (requestURL: string, payload: any) => {
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
  getJson,
  postJson,
  postFormData,
  putJson,
  removeJson,
};
