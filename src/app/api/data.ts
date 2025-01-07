import axios, { isAxiosError } from "axios";
import appClient from "./axios";

export interface IProduct {
  _id: string;
  nombre: string;
  imagen: string
  descripcion: string;
  unidad: number
  precio: number;
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

// const appClient = axios.create({
//   baseURL: `${API}`,
//   withCredentials: true,
// });

export const getAllProds = async (): Promise<IProduct[]> => {
  try {
    const response = await appClient.get(`/products`);
    return response.data.products;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      console.warn("No autorizado. Token inválido o faltante.");
      return [];
    }
    throw error;
  }
};

export const getTechData = async (): Promise<IProduct[]> => {
  try {
    const response = await appClient.get(`/products/Tecnologia`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      // Devuelve un array vacío si no hay productos
      return [];
    }
    throw error; // Propaga otros errores
  }
};

export const getShoesData = async (): Promise<IProduct[]> => {
  try {
    const response = await appClient.get(`/products/Zapatos`);
    return response.data;
  } catch (error) {
    /*
  // Devolver un array vacio si no hay productos
  
  El metodo: "axios.isAxiosError" Verifica si un error capturado en un bloque try-catch es específicamente un error generado por Axios.
  */

    // si el error es de axios y el estado es 404 entonces realiza lo sig=>
    if (isAxiosError(error) && error.response?.status === 401) {
      // retorno un array
      return [];
    }

    throw error;
  }
};

export const getClothesData = async (): Promise<IProduct[]> => {
  try {
    const response = await appClient.get(`/products/Ropa`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      return [];
    }

    throw error;
  }
};

export const getHomeData = async (): Promise<IProduct[]> => {
  try {
    const response = await appClient.get(`}/products/Hogar`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      return [];
    }

    throw error;
  }
};


export const getBeautyData = async (): Promise<IProduct[]> => {
  try {
    const response = await appClient.get(`/products/Belleza`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      return [];
    }

    throw error;
  }
};

