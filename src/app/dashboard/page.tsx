import ProtectedComponent from "@/components/protectedComponent/protected-component";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAllProds } from "../api/data";
import { ModalForm } from "@/components/modal-form";

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
            <ModalForm/>
          </nav>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 2xl:grid-cols-5">
          {data.length > 0 ? (
            data.map((data, index) => (
              <ProductCard
                key={index}
                nombre={data.nombre}
                imagen={data.imagen}
                descripcion={data.descripcion}
                precio={data.precio}
              />
            ))
          ) : (
            <div className="flex h-16 shrink-20 items-center gap-2">
              <p
                className="text-center flex flex-1 flex-col gap-4 p-4 pt-0
            font-sans font-medium
            "
              >
                No hay productos para mostrar.
              </p>
            </div>
          )}
        </div>
      </div>
    </ProtectedComponent>
  );
}

export default DashboardPage;
