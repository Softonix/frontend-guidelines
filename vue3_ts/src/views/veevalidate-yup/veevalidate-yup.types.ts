export interface ILoginType {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token?: string;
  success: boolean;
  error?: {
    code: number;
    message: string;
  };
}
