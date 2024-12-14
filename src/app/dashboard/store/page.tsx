"use client";

// import { createProd, uploadCSV } from "@/app/api/auth";
// import { createProd, IProduct } from "@/app/api/auth";
import SalesTable from "@/components/sales-table";
import { useState } from "react";
// import axios from "axios";

function StorePage() {
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
            const response = await fetch("http://localhost:3001/api/products/create/csv", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Error al subir el archivo");
            }

             await response.json();
            // console.log(data.products);
            setMessage(`¡Archivo subido con éxito! Productos creados:`);
        } catch (error) {
            setMessage("Ocurrió un error al subir el archivo.");
            console.log(error);
        }
    };

  return (
    <>
      <div>
        <div className="space-y-5">
          <SalesTable />
        </div>


        <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", textAlign: "center" }}>
            <h1>Subir Archivo CSV</h1>
            <input type="file" accept=".csv" onChange={handleFileChange} />
            <button
                onClick={handleFileUpload}
                style={{
                    marginTop: "10px",
                    padding: "10px 20px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Subir
            </button>
            {message && <p style={{ marginTop: "10px", color: message.includes("éxito") ? "green" : "red" }}>{message}</p>}
        </div>
      </div>
    </>
  );
}

export default StorePage;


