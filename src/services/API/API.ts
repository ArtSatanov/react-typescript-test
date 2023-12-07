import axios from 'axios';

axios.defaults.baseURL = 'https://6570ff4709586eff66422a89.mockapi.io/';

export async function getProducts(signal: any) {
  const { data } = await axios.get(`goods`, { signal });
  return data;
}

export async function getUsers(signal: any) {
  const { data } = await axios.get(`users`, { signal });
  return data;
}
