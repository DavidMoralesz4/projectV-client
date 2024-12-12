import {
  Table,
  TableBody,

  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const ventas = [
  {
    id: "V001",
    fecha: "2023-06-01",
    producto: "Laptop",
    cantidad: 2,
    precioUnitario: 999.99,
    total: 1999.98,
  },
  {
    id: "V002",
    fecha: "2023-06-02",
    producto: "Monitor",
    cantidad: 3,
    precioUnitario: 249.99,
    total: 749.97,
  },
  {
    id: "V003",
    fecha: "2023-06-03",
    producto: "Teclado",
    cantidad: 5,
    precioUnitario: 49.99,
    total: 249.95,
  },
  {
    id: "V004",
    fecha: "2023-06-04",
    producto: "Mouse",
    cantidad: 10,
    precioUnitario: 29.99,
    total: 299.90,
  },
  {
    id: "V005",
    fecha: "2023-06-05",
    producto: "Impresora",
    cantidad: 1,
    precioUnitario: 199.99,
    total: 199.99,
  },
]

export default function SalesTable() {
  const totalVentas = ventas.reduce((sum, venta) => sum + venta.total, 0)

  return (
    <div className="space-y-2 ">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Ventas del negocio</h2>
          <div className="text-lg font-semibold">
            Total de Ventas: <span className="text-primary">${totalVentas.toFixed(2)}</span>
          </div>
        </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID Venta</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Producto</TableHead>
            <TableHead className="text-right">Cantidad</TableHead>
            <TableHead className="text-right">Precio Unitario</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ventas.map((venta) => (
            <TableRow key={venta.id}>
              <TableCell className="font-medium">{venta.id}</TableCell>
              <TableCell>{venta.fecha}</TableCell>
              <TableCell>{venta.producto}</TableCell>
              <TableCell className="text-right">{venta.cantidad}</TableCell>
              <TableCell className="text-right">${venta.precioUnitario.toFixed(2)}</TableCell>
              <TableCell className="text-right">${venta.total.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

