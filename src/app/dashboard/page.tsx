"use client";

import ProtectedComponent from "@/components/protectedComponent/protected-component";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModalForm } from "@/components/modal-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "../api/data";

function DashboardPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/products", {
          withCredentials: true, // Si usas cookies para autenticación
        });
        setProducts(response.data);
        setMessage(response.data.menssage);
      } catch (err: any) {
        setError(err.menssage);
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ProtectedComponent>
      <div className="space-y-20">
        <header className="space-y-6">
          <nav className="flex justify-between gap-3">
            <div className="flex w-[600px]">
              <Input
                className="rounded-e-none"
                placeholder="Buscar productos..."
              />
              <Button className="truncate text-xs rounded-s-none">
                Buscar
              </Button>
            </div>
            <ModalForm />
          </nav>
        </header>

        {products.length === 0 ? (
          // Mostrar mensaje si no hay productos
          <div className="text-lg text-center text-gray-500">{message}</div>
        ) : (
          // Mostrar productos si hay datos
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 2xl:grid-cols-5">
            {products.map((prods, index) => (
              <ProductCard
                key={prods._id}
                nombre={prods.nombre}
                descripcion={prods.descripcion}
                imagen={prods.imagen}
                precio={prods.precio}
              />
            ))}
          </div>
        )}
      </div>
    </ProtectedComponent>
  );
}

export default DashboardPage;
