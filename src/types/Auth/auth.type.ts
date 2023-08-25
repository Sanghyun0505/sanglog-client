export interface SignInUpParam {
  userId: string;
  password: string;
}

export interface SignUpType {
  userId: string;
  password: string;
  passwordCheck: string;
}

export interface SignInResponse {
  access_token: string;
}
