"use client";

import { fetchLogin, logoutFn } from "@/app/api/auth";
import { IContextType } from "@/types/funtions";
import { IUserProps } from "@/types/user";
import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { redirect } from "next/navigation";
import { toast } from "sonner";

interface ChilPros {
  children: ReactNode;
}

export const AuthContext = createContext<IContextType | undefined>(undefined);

export const AuthProvider = ({ children }: ChilPros) => {
  const [user, setUser] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null);
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const signin = async (user: IUserProps) => {
    try {
      const response = await fetchLogin(user);
      setUser(response.data.user);
      setIsAuthenticate(true);      
      setMessage(response.data.message)
      setError(null);
      toast.success(response.data.message);
    } catch (err: any) {
      if (err.response?.status === 401) {
        toast.error(err.response.data.error);
      }
    }
  };

  const logout = async () => {
    try {
      const response = await logoutFn();
      setIsAuthenticate(false);
      return response.data.message;
    } catch (error) {
      console.log("error aqui", error);
    }
  };

  // Verifico la autenticacion
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/dashboard",
          { withCredentials: true }
        );
        setUser(response.data.username);
        setEmail(response.data.email);
        setMessage(response.data.message)
        setIsAuthenticate(true);
        // if(isAuthenticate) redirect('/dashboard')
      } catch(error: any) {
        setIsAuthenticate(false);
        setError(error.response?.data.error)
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticate, signin, logout, email, error, message }}
    >
      {children}
    </AuthContext.Provider>
  );
};
