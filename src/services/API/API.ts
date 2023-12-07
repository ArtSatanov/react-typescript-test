import axios from 'axios';

axios.defaults.baseURL = 'https://6570ff4709586eff66422a89.mockapi.io/';

export async function getProduct(signal: any) {
  const { data } = await axios.get(`goods`, { signal });
  return data;
}
