"use client";

import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthContext } from "@/contexts/authContext";
import { IContextType } from "@/types/funtions";
import { IUserProps } from "@/types/user";
import { redirect } from "next/navigation";

function LoginForm() {
  const { signin, isAuthenticate } = useContext(AuthContext) as IContextType;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserProps>();
  
  const onSubmit: SubmitHandler<IUserProps> = async (data) => {
    try {
      await signin(data);
    } catch (error) {
      console.log("Error al iniciar sesion", error);
    }
  };

  if(isAuthenticate) redirect('/dashboard')

  return (
    <Card className="mx-auto max-w-sm mt-20">
      <CardHeader>
        <CardTitle className="text-center text-2xl">V</CardTitle>
        <CardTitle className="text-center text-xl font-medium">Iniciar Sesión</CardTitle>
        <CardDescription>
          Ingrese su correo electrónico y contrasena para continuar
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Correo Electronico</Label>
              <Input
                id="email"
                type="email"
                {...register("email", { required: "El email es obligatorio" })}
                placeholder="m@ejemplo.com"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Contrasena</Label>
              </div>
              <Input
                id="password"
                type="password"
                {...register("password", {
                  required: "La contrasena es obligatioria",
                })}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Iniciar Sesión
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default LoginForm;
