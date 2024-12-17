import { getShoesData } from "@/app/api/data";
import ProductCard from "@/components/product-card";

async function ShoesPage() {
  const shoesData = await getShoesData();

  return (
    <>
      <div>Bienvenido a Zapatillas !!</div>

      {shoesData.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 2xl:grid-cols-5">
          {shoesData.map((prods, index) => (
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
  );
}

export default ShoesPage;
