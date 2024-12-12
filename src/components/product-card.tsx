import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type CardProps = React.ComponentProps<typeof Card>

export default function ProductCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[280px] h-[380px]", className)} {...props}>
      <CardHeader className="">
        <CardTitle>Zapatillas Deportivas</CardTitle>
      </CardHeader>
      <CardContent className="h-[260px]">
        <div className="aspect-square relative h-[160px]">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Zapatillas Deportivas"
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">$99.99</div>
        </div>
        <div className="text-sm text-muted-foreground">
          Disponible en varios colores y tallas. Suela de goma duradera y parte superior transpirable.
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
           Eliminar
        </Button>
      </CardFooter>
    </Card>
  )
}

