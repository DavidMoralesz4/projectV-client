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
        <CardTitle>{props.nombre}</CardTitle>
      </CardHeader>
      <CardContent className="h-[240px]">
        <div className="aspect-square relative h-[120px]">
          <img
            src={props.imagen}
            alt="Zapatillas Deportivas"
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">{props.precio}</div>
        </div>
        <div className="text-sm text-muted-foreground">
         {props.descripcion}
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

