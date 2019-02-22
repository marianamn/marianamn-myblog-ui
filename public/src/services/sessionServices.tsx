const get = (key: string) => {
  return JSON.parse(window["sessionStorage"].getItem(key.toLowerCase()));
};

const set = (key: string, value: string) => {
  window["sessionStorage"].setItem(key.toLowerCase(), JSON.stringify(value));
};

const clear = () => {
  sessionStorage.clear();
};

export default {
  get,
  set,
  clear,
};
