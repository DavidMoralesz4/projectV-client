import { getClothesData } from "@/app/api/data";
import ProductCard from "@/components/product-card";
import React from "react";

async function ClothesPage() {
  const clothesData = await getClothesData();

  return (
    <div>
      <>
        <div>Bienvenido a Ropa !!</div>

        {clothesData.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 2xl:grid-cols-5">
            {clothesData.map((prods, index) => (
              <ProductCard
                key={index}
                nombre={prods.nombre}
                descripcion={prods.descripcion}
                imagen={prods.imagen}
                precio={prods.precio}
              />
            ))}
          </div>
        ) : (
          <div className="text-lg text-center text-gray-500">
            No hay productos disponibles en esta categoría.
          </div>
        )}
      </>
    </div>
  );
}

export default ClothesPage;
