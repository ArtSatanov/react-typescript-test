interface RoutesApp {
  USER: String;
  HOME: string;
  LOGIN: string;
  SIGNUP: string;
  ADMIN: string;
}

export const routes: RoutesApp = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  ADMIN: '/admin',
  USER: '/user',
};
