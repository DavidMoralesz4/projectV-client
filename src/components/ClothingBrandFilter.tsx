'use client'

import { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

// Definimos un array de marcas de ropa
const clothingBrands = [
  "Nike",
  "Adidas",
  "Puma",
  "Reebok",
  "Under Armour",
  "New Balance",
  "Converse",
  "Vans",
  "Levi's",
  "H&M"
]

export default function ClothingBrandFilter() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

  return (
    <div className="p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Filtrar por marca</h2>
      <div className="space-y-2">
        {clothingBrands.map(brand => (
          <div key={brand} className="flex items-center space-x-2">
            <Checkbox
              id={brand}
              checked={selectedBrands.includes(brand)}
              onCheckedChange={() => handleBrandChange(brand)}
            />
            <Label
              htmlFor={brand}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {brand}
            </Label>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="text-md font-semibold">Marcas seleccionadas:</h3>
        <p className="text-sm">{selectedBrands.join(', ') || 'Ninguna'}</p>
      </div>
    </div>
  )
}

