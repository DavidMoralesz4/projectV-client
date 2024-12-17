import {  IUserProps } from "./user";

type IContextType = {
  user: null;
  email: null
  isAuthenticate: boolean;
  signin: (user: IUserProps) => Promise<void>;
  logout: () => Promise<void>
};

