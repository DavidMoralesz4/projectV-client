import { IUserProps } from "./user";

type IContextType = {
  user: string | null;
  error: string | null;
  message: string | null;
  email: string | null;
  isAuthenticate: boolean;
  signin: (user: IUserProps) => Promise<void>;
  logout: () => Promise<void>;
};
