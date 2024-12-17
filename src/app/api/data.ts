import axios from "axios";

export interface IData {
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
}

// Configurar Axios para Enviar Cookies
// Habilita el envío de cookies en cada solicitud agregando la opción withCredentials.
const API = "http://localhost:3001/api";
const appClient = axios.create({
  baseURL: `${API}`,
  withCredentials: true,
});

export const getAllProds = async (): Promise<IData[]> => {
  const response = await appClient.get(`${API}/products`);
  return response.data;
};

export const getTechData = async (): Promise<IData[]> => {
  const response = await appClient.get(`${API}/products/Tecnologia`);
  return response.data;
};

export const getShoesData = async (): Promise<IData[]> => {
  try {
    const response = await appClient.get(`${API}/products/Zapatos`);
    return response.data;
  } catch (error) {
    throw console.log(error);
    // console.error("Error al obtener los productos:");
  }
};
