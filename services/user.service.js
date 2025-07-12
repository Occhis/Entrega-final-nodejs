export const validateUser = ({ username, password }) => {
  return username === 'admin' && password === '123456';
};
