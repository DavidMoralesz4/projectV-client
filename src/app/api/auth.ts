import { IUserProps } from "@/types/user";
import axios from "axios";

// Configurar Axios para Enviar Cookies
// Habilita el envío de cookies en cada solicitud agregando la opción withCredentials.
const API = "http://localhost:3001/api";
const appClient = axios.create({
  baseURL: `${API}`,
  withCredentials: true,
});

export const fetchLogin = (values: IUserProps) => appClient.post(`${API}/login`, values);

export const logoutFn = () => appClient.post(`${API}/logout`);



// export const fetchDashboard = () => appClient.get(`${API}/dashboard`)

//  const uploadCSV = async (file: string) => {
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//         const response = await fetch("http://localhost:3000/upload-csv", {
//             method: "POST",
//             body: formData,
//         });
//         const data = await response.json();
//         console.log("Datos procesados:", data);
//     } catch (error) {
//         console.error("Error subiendo el archivo:", error);
//     }
// };
