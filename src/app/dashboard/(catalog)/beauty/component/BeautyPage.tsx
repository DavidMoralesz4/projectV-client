import { getBeautyData } from "@/app/api/data";
import ProductCard from "@/components/product-card";
import React from "react";

async function BeautyPage() {
    const beautyData = await getBeautyData()

  return (
    <>
      <div className="text-2xl">Bienvenido a Belleza!</div>

      {beautyData.length === 0 ? (
        // Mostrar mensaje si no hay productos
        <div className="text-lg text-center text-gray-500">
          No hay productos disponibles en esta categoría.
        </div>
      ) : (
        // Mostrar productos si hay datos
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 2xl:grid-cols-5">
          {beautyData.map((prods, index) => (
            <ProductCard
              key={index}
              nombre={prods.nombre}
              descripcion={prods.descripcion}
              imagen={prods.imagen}
              precio={prods.precio}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default BeautyPage;
