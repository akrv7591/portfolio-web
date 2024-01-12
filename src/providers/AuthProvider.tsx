import React from "react";
import portfolioApi from "@api/poortfolio";
import { WITH_BACKEND } from "@constants/backend";
import jwt from "jsonwebtoken";
import { JWT_KEY } from "@configs/jwt";
import { AUTH_USER } from "@constants/auth";

export type UserProps = {
  id: number;
  username: string;
  exp: number;
  ipt: number;
};

export type AuthProps = {
  user: UserProps;
  token: string;
  signin: (username: string, password: string, callback?: VoidFunction) => Promise<void>;
  signout: (callback?: VoidFunction) => void;
};

export type AuthProviderProps = {
  children: JSX.Element;
};

const AuthContext = React.createContext<AuthProps>({} as AuthProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = React.useState<UserProps>({} as UserProps);
  const [token, setToken] = React.useState("");

  const signin: AuthProps["signin"] = async (username, password, callback?) => {
    if (WITH_BACKEND) {
      const res = await portfolioApi.post<{ token: string }>("", { username, password });
      if (!res.ok || !res.data) return;
      jwt.verify(token, JWT_KEY, (err, decoded) => {
        if (err) return console.log(err.message);
        setToken(token);
        setUser(decoded as UserProps);
      });
    } else {
      setUser(AUTH_USER);
    }
    callback && callback();
  };

  const signout: AuthProps["signout"] = (callback?) => {
    callback && callback();
  };

  return <AuthContext.Provider value={{ user, token, signin, signout }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => React.useContext(AuthContext);
