import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard/ProductDetailsCard";
import { ProductDTO } from "../../../models/product";
import * as CartService from '../../../services/cart-service';
import * as productService from '../../../services/product-service';
import { ContextCartCount } from "../../../utils/context-cart";
import './styles.css';

export default function ProductDetails() {

    const params = useParams();

    const navigate = useNavigate();

    // need use 'setContextCartCount' to exit fail (posso utilizar somente o dado que altera sem utilizar o 'contextCartCount', pois ñ é necessário)
    const { setContextCartCount } = useContext(ContextCartCount);

    const [product, setProduct] = useState<ProductDTO>();

    useEffect(() => {

        productService.findById(Number(params.productId))
            .then(response => { console.log(response.data); setProduct(response.data); });
    }, []);

    function handleBuyClick() {
        if (product) {
            CartService.addProduct(product);
            setContextCartCount(CartService.getCart().items.length);
            navigate("/cart");
        }
    }

    return (
        <main>
            <section id="dsc-product-details-section" className="dsc-container">
                {
                    // {/* // passo product como argumento. 'product &&' força uma verificação se este é realmente um Obj ProductDTO (e ñ undefined) */}
                    product &&
                    <ProductDetailsCard product={product} />
                }

                <div className="dsc-btn-page-container">
                    <div onClick={handleBuyClick}>
                        <ButtonPrimary text="Comprar" />
                    </div>
                    <Link to={"/"}>
                        <ButtonInverse text="Início" />
                    </Link>
                </div>
            </section>
        </main>
    );
}