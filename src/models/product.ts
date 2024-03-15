/* Diferença entre TS do TSX: o TS não é um componente, posso declarar componentes typescript e javascript porém não é um componente */

import { CategoryDTO } from "./categorie";

export type ProductDTO = {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;
    categories: CategoryDTO[];
}