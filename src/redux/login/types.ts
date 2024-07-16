export interface LoginProps {
    username: string;
    password: string;
    name ?: string;
    isLoggedin?: boolean;
  }

  export interface LoginState {
    currentUser: LoginProps | null;
    error: string | null;
    users: LoginProps[];
  }
  