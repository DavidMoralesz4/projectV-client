import axios from "axios";

const API = "http://localhost:3001/api";

const appClient = axios.create({
  baseURL: API,
  withCredentials: true, // Permite enviar cookies automáticamente
});

export default appClient;
