// ------------------------------AUTH--------------------------

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
  errorAuth: string | null;
}

export interface IResponseUser {
  createdAt?: string;
  email: string;
  password: string;
  id: string;
  name: string;
}
// ------------------------------ITEMS--------------------------
export interface IItem {
  createdAt: string;
  name: string;
  avatar: string;
  description: string;
  id: string;
}

export interface IInitStateItems {
  items: IItem[];
  isLoading: boolean;
  error: string | null;
}

// ---------------------------------FORMS-------------------------
export interface IValues {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

export interface IUser {
  name: string | null;
  lastname?: string | null;
  email: string | null;
  password: string | null;
}
