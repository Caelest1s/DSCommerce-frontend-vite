import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";

/* retorna uma coleção de Produtos -> o retorno é apontado como último dentro do escopo/sintaxe do método */
export function findPageRequest(page: number, name: string, size = 12, sort = "name") {
    const config: AxiosRequestConfig = {
        method: "GET",
        baseURL: BASE_URL,
        url: "/products",
        params: {
            // {page: page,} o javascript simplifica e entende isto apenas chamando nome do parametro.
            page,
            name,
            size,
            sort
        }
    }
    // axios.get(`${BASE_URL}/products?size=12`)
    return axios(config);
}

export function findById(id: number) {
    return axios.get(`${BASE_URL}/products/${id}`);
}
