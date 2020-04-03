import React, { createContext, useContext, ReactNode } from "react";
import { useApiProvider } from "./api.provider";

interface SignUpRequest {
  email: string;
  password: string;
}

interface Props {
  signUp?(body: SignUpRequest): Promise<any>;
  login?(body: LoginRequest): Promise<any>;
  children?: ReactNode;
}

const AuthContext = createContext<Props | null>(null);

export const AuthProvider = (props: Props) => {

const api = useApiProvider();
  const signUp = async (body: SignUpRequest) => {
    return api.request!<SignUpRequest>({
      url: "auth",
      body: body,
      method: 'POST',
    });
  };  

  const value = {
    login: props.login || login,
    signUp: props.signUp || signUp,
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export const useAuthProvider = () => {
  return useContext(AuthContext)!;
};

interface LoginRequest {
  email: string;
  password: string;
}

const login = async (body: LoginRequest) => {
  return 1;
};
