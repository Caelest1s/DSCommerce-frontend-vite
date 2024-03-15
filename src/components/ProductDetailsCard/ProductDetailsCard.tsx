import { ProductDTO } from "../../models/product";
import ProductCategory from "../ProductCategory";
import './styles.css';

type Props = {
    product: ProductDTO;
}
/* pego o objeto passado */
export default function ProductDetailsCard({ product }: Props) {
    return (

        <div className="dsc-card dsc-mb20">
            <div className="dsc-product-details-top dsc-line-bottom">
                <img src={product.imgUrl} alt={product.name} />
            </div>

            <div className="dsc-product-details-bottom">
                <h3>R$ {product.price.toFixed(2)}</h3>
                <h4>{product.name}</h4>

                <p>{product.description}
                </p>
                <div className="dsc-category-container">
                    {
                        product.categories.map(item => { return <ProductCategory key={item.id} name={item.name} />})
                        /* ou product.categories.map(item => (<ProductCategory name="Eletrônicos" />)) ---->> c/parenteses não utiliza  'return'
                           o key utiliza uma chave única*/
                    }
                </div>
            </div>
        </div>
    );
}