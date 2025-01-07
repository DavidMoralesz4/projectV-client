'use client'

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

export function ModalForm() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");

  // Manejar la selección del archivo
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  // Manejar el envío del archivo
  const handleFileUpload = async () => {
    if (!file) {
      setMessage("Por favor, selecciona un archivo.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/products/create/csv", formData);

      if (!response) {
        toast.error('No hay archivo')
      }
      toast.success(response.data.menssage)
      
    } catch (error: any) {
      if(error.response.status === 500) {
        toast.error(error.response.data.message)
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Subir Archivo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogDescription>
            Recuerda subir formatos tipo ".CSV"
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Subir</Label>
            <Input
              type="file"
              accept=".csv"
              className="col-span-3"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleFileUpload}>
            Cargar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
