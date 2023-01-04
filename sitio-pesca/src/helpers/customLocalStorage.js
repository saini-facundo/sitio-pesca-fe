export const getLSValue = (key) => {
  const value = window.localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return null;
};

export const setLSValue = (key, value = null) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
