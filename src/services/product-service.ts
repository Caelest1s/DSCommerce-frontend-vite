import axios from "axios";
import { BASE_URL } from "../utils/system";

/* retorna uma coleção de Produtos -> o retorno é apontado como último dentro do escopo/sintaxe do método */
export function findAll() {
    return axios.get(`${BASE_URL}/products?size=12`)
}

export function findById(id: number){
    return axios.get(`${BASE_URL}/products/${id}`);
}
