"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthContext } from "@/contexts/authContext";
import { IContextType } from "@/types/funtions";
import { IUserProps } from "@/types/user";
import { redirect } from "next/navigation";
import { useContext, useState } from "react";
import { Toaster, toast } from "sonner";
import axios from "axios";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [isLoading, setIsLoading] = useState(false);
  const { signin, isAuthenticate, error } = useContext(
    AuthContext
  ) as IContextType;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserProps>();

  const onSubmit: SubmitHandler<IUserProps> = async (data) => {
    try {
      await signin(data);
    } catch (error: any) {
      console.error("Error al ingresar, algo fallo");
    }
  };

  if (isAuthenticate && !isLoading) redirect("/dashboard");

  return (
    <>
      <form
        className={cn("flex flex-col gap-6", className)}
        {...props}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-5xl font-bold font-mono relative bottom-7">V</h1>
          <p className="text-balance text-2xl text-muted-foreground relative bottom-3">
            Bienvenido
          </p>
          <p className="text-balance text-xl text-muted-foreground">
            Ingresa tus datos para continuar
          </p>
        </div>
        <div className="grid gap-6">
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
              <Label htmlFor="password">Contraseña</Label>
            </div>
            <Input
              id="password"
              type="password"
              {...register("password", {
                required: "La contraseña es obligatioria",
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
    </>
  );
}
