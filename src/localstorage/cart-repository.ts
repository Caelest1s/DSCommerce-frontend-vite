import { OrderDTO } from "../models/order";
import { CART_KEY } from "../utils/system";

export function save(cart: OrderDTO) {
    const str = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, str);
}

export function get(): OrderDTO {
    // 'item=[] -> caso não exista o caminho do get(com.devsuperior...) ele retorna uma lista vazia em formato de string
    const str = localStorage.getItem(CART_KEY) || '{"items":[]}';
    return JSON.parse(str);
}