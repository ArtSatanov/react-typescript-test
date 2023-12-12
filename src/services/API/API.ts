import axios from 'axios';
import { IUserForm } from '../../interfaces/interfaces';

axios.defaults.baseURL = 'https://6570ff4709586eff66422a89.mockapi.io/';

export async function getProducts(signal: any) {
  const { data } = await axios.get(`goods`, { signal });
  return data;
}

export async function getListOfUsers() {
  const { data } = await axios.get(`users`);
  return data;
}

export async function getUser(id: string) {
  const { data } = await axios.get(`users/${id}`);
  return data;
}

export async function setNewUser(userInfo: IUserForm) {
  const { data } = await axios.post(`users`, userInfo);
  return data;
}
