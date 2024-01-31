import axios from 'axios';
import { IResponseUser, IUserForm } from '../../interfaces/interfaces';

axios.defaults.baseURL = 'https://6570ff4709586eff66422a89.mockapi.io/';

export async function getProducts(signal: any) {
  const { data } = await axios.get(`product`, { signal });
  return data;
}

export async function fetchUsers(signal: any) {
  const { data } = await axios.get(`users`, { signal });
  return data;
}

export async function getListOfUsers() {
  const { data } = await axios.get(`users`);
  return data;
}

export async function deleteUser(id: string) {
  const { data } = await axios.delete(`users/${id}`);
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

export async function userStatus(
  id: string,
  status: Pick<IResponseUser, 'status'>
) {
  const { data } = await axios.put(`/users/${id}`, status);
  return data;
}
