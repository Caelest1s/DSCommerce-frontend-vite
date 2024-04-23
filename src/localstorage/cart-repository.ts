import { OrderDTO } from "../models/order";

export function save(cart: OrderDTO) {
    const str = JSON.stringify(cart);
    localStorage.setItem("com.devsuperior.dscommerce/Cart", str);
}

export function get(): OrderDTO {
    // 'item=[] -> caso não exista o caminho do get(com.devsuperior...) ele retorna uma lista vazia em formato de string
    const str = localStorage.getItem("com.devsuperior.dscommerce/Cart") || '{"items"=[]}';
    return JSON.parse(str);
}