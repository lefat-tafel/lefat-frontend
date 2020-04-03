import React, { createContext, ReactNode, useContext } from "react";

type Method = "GET" | "POST" | "PUT" | "DELETE";

interface Request<TBody> {
  url: string;
  method: Method;
  headers?: Headers;
  body?: TBody;
}

interface Props {
  request?<T>(request: Request<T>): Promise<any>;
  children?: ReactNode;
}

const ApiContext = createContext<Props | null>(null);

export const ApiProvider = (props: Props) => {
  const globalHeaders = new Headers({
    "Content-Type": "application/json",
  });
  const baseUrl = process.env.REACT_APP_API_URL;

  const request = <TBody extends {}, TRes extends {}>({
    url,
    method,
    headers,
    body,
  }: Request<TBody>) => {
    return fetch(`${baseUrl}/${url}`, {
      method,
      headers: globalHeaders,
      body: JSON.stringify(body),
    }).then((res) => res.json()) as Promise<TRes>;
  };

  const value = {
    request: props.request || request,
  };
  return (
    <ApiContext.Provider value={value}>{props.children}</ApiContext.Provider>
  );
};

export const useApiProvider = () => {
  return useContext(ApiContext)!;
};
