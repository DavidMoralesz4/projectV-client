import axios, { isAxiosError } from "axios";

export interface IData {
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
}
type ClientType = {
  email: string
  address: string
}

export type Order = {
  client: ClientType
  status: "pending" | "processing" | "success" | "failed";
  total: number
}

// Configurar Axios para Enviar Cookies
// Habilita el envío de cookies en cada solicitud agregando la opción withCredentials.
const API = "http://localhost:3001/api";
const appClient = axios.create({
  baseURL: `${API}`,
  withCredentials: true,
});

export const getAllProds = async (): Promise<IData[]> => {
  try {
    const response = await appClient.get(`${API}/products`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      return [];
    }
    throw error;
  }
};

export const getTechData = async (): Promise<IData[]> => {
  try {
    const response = await appClient.get(`${API}/products/Tecnologia`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      // Devuelve un array vacío si no hay productos
      return [];
    }
    throw error; // Propaga otros errores
  }
};

export const getShoesData = async (): Promise<IData[]> => {
  try {
    const response = await appClient.get(`${API}/products/Zapatos`);
    return response.data;
  } catch (error) {
    /*
  // Devolver un array vacio si no hay productos
  
  El metodo: "axios.isAxiosError" Verifica si un error capturado en un bloque try-catch es específicamente un error generado por Axios.
  */

    // si el error es de axios y el estado es 404 entonces realiza lo sig=>
    if (isAxiosError(error) && error.response?.status === 404) {
      // retorno un array
      return [];
    }

    throw error;
  }
};

export const getClothesData = async (): Promise<IData[]> => {
  try {
    const response = await appClient.get(`${API}/products/Ropa`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      return [];
    }

    throw error;
  }
};

export const getHomeData = async (): Promise<IData[]> => {
  try {
    const response = await appClient.get(`${API}/products/Hogar`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      return [];
    }

    throw error;
  }
};


export const getBeautyData = async (): Promise<IData[]> => {
  try {
    const response = await appClient.get(`${API}/products/Belleza`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      return [];
    }

    throw error;
  }
};

