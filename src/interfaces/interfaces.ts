export interface IUser {
  email: null | string;
  password: null | string;
}

export interface IPropsPage {
  redirectTo: string;
  component: React.ReactElement;
}

export interface IUserForm {
  email: string;
  password: string;
}

export interface IInitState {
  user: IUser;
  isLoggedIn: boolean;
  isAdmin: boolean;
  isRefreshing: boolean;
  fakeToken: string | null;
}

export interface IResponseUser {
  payload: {
    createdAt: string;
    email: string;
    password: string;
    id: string;
  };
}
