// INTERFACES
export interface IVeeValidateLogin {
  email: string;
  password: string;
}

export interface IVeeValidateLoginResponse {
  token?: string;
  success: boolean;
  error?: {
    code: number;
    message: string;
  };
}

// ENUMS
export enum EValidation {
  // eslint-disable-next-line max-len
  PASSWORD = 'Minimum 8 characters, at least one lower case characters, at least one uppercase character, at least one number and at least one symbol',
  PASSWORD_CONFIRMATION = 'Password confirmation does not match'
}
