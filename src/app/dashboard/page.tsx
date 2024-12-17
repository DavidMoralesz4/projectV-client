import ProtectedComponent from "@/components/protectedComponent/protected-component";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAllProds } from "../api/data";

async function DashboardPage() {
  const data = await getAllProds();

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
            <Button className="truncate text-xs w-[200px]">
              Subir productos
            </Button>
          </nav>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 2xl:grid-cols-5">
          {data.map((data, index) => (
            <ProductCard
              key={index}
              nombre={data.nombre}
              imagen={data.imagen}
              descripcion={data.descripcion}
              precio={data.precio}
            />
          ))}
        </div>
      </div>
    </ProtectedComponent>
  );
}

export default DashboardPage;
