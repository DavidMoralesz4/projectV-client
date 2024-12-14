import axios from "axios";

// Configurar Axios para Enviar Cookies
// Habilita el envío de cookies en cada solicitud agregando la opción withCredentials.
const API = "http://localhost:3001/api";
const appClient = axios.create({
  baseURL: `${API}`,
  withCredentials: true,
});

export const getAllProds = () => appClient.get(`${API}/products`)