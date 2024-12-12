import { IUser, IUserProps } from "@/types/user";
import axios from "axios";

// Configurar Axios para Enviar Cookies
// Habilita el envío de cookies en cada solicitud agregando la opción withCredentials.
const API = 'http://localhost:3001/api'
const appClient = axios.create({
        baseURL: `${API}`,
    withCredentials: true
})

export const fetchLogin = (values: IUserProps) => appClient.post(`${API}/login`, values)

// export const fetchDashboard = () => appClient.get(`${API}/dashboard`)

export const fetchRegis = async({user}: IUser) => {
    try {
        const response = await appClient.post('http://localhost:3001/api/register', {user})
        return response.data
    } catch (error) {
        console.error(error)
    }
}


export const logoutFn = () => appClient.post(`${API}/logout`)
