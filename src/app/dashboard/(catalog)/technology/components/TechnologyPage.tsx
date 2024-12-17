import { getTechData } from "@/app/api/data";
import ProductCard from "@/components/product-card";
import React from "react";

async function TechnologyPage() {
  const data = await getTechData();

  return (
    <>
      <div className="text-2xl">Bienvenido a Tecnologia</div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 2xl:grid-cols-5">
        {data.map((prods, index) => (
            <ProductCard key={index} nombre={prods.nombre} descripcion={prods.descripcion} imagen={prods.imagen} precio={prods.precio}/>
        ))}
      </div>
    </>
  );
}

export default TechnologyPage;
