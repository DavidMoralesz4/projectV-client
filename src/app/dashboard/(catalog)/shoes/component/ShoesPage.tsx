import { getShoesData } from "@/app/api/data";
import ProductCard from "@/components/product-card";
import React from "react";

async function ShoesPage() {
  const data = await getShoesData();

  return (
    <>
      <div>Bienvenido a Zapatillas !!</div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 2xl:grid-cols-5">
        {data.length > 0 ? (
          <ul>
            {data.map((prods, index) => (
              <ProductCard
                key={index}
                nombre={prods.nombre}
                descripcion={prods.descripcion}
                imagen={prods.imagen}
                precio={prods.precio}
              />
            ))}
          </ul>
        ) : (
          <p>No hay productos para mostrar.</p>
        )}
      </div>
    </>
  );
}

export default ShoesPage;
