"use client";

import { fetchLogin,  logoutFn } from "@/app/api/auth";
import { IContextType } from "@/types/funtions";
import {  IUserProps } from "@/types/user";
import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";

interface ChilPros {
  children: ReactNode;
}

export const AuthContext = createContext<IContextType | undefined>(undefined);

export const AuthProvider = ({ children }: ChilPros) => {
  const [user, setUser] = useState(null);
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const signin = async (user: IUserProps) => {
    const response = await fetchLogin(user);
    setUser(response.data.user);
    setIsAuthenticate(true);
  };

  const logout = async () => {
    try {
      const response = await logoutFn();
      setIsAuthenticate(false);
      return response.data.message
    } catch (error) {
     console.log('error aqui', error);
    }
  };

  // Verifico la autenticacion
  useEffect(() => {
    const checkAuth = async() => {
      try {
          const response = await axios.get('http://localhost:3001/api/dashboard', {withCredentials: true})
          setUser(response.data.data.username)
          setIsAuthenticate(true)
      } catch {
        setIsAuthenticate(false)
      }
    }
    checkAuth()
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticate, signin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
