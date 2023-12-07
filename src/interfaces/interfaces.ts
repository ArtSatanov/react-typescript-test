export interface User {
  id: number;
  login: null | string;
  password: null | string;
}

export interface IPropsPage {
  redirectTo: string;
  component: React.ReactElement;
}
