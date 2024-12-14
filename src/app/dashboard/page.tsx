"use client";

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/authContext";
import ProtectedComponent from "@/components/protectedComponent/protected-component";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAllProds } from "../api/data";

function DashboardPage() {
  const [products, setProducts] = useState([])

  const auth = useContext(AuthContext);


  useEffect(() => {
    const fetchProducts = async() => {
      const response = await getAllProds()
      setProducts(response.data)
    }

    fetchProducts()
  },[])


  return (
    <ProtectedComponent>
      <div className="space-y-20">
        <header className="space-y-6">
          <h1 className="font-semibold text-2xl">
            Bienvenido de nuevo {auth?.user} 🚀!!
          </h1>

          <nav className="flex justify-between gap-3">
            <div className="flex w-[600px]">            
            <Input className="rounded-e-none" placeholder="Buscar productos..."/>
            <Button className="truncate text-xs rounded-s-none">Buscar</Button>
            </div>
            <Button className="truncate text-xs w-[200px]">Subir productos</Button>
          </nav>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 2xl:grid-cols-5">
          {
            products.map((prod, index) => {
              <ProductCard key={index}  prod={prod.name} />
            })
          }
        </div>
      </div>
    </ProtectedComponent>
  );
}

export default DashboardPage;
