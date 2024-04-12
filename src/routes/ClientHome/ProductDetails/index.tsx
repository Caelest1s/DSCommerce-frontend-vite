import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard/ProductDetailsCard";
import { ProductDTO } from "../../../models/product";
import * as productService from '../../../services/product-service';
import './styles.css';

export default function ProductDetails() {

    const params = useParams();

    const [product, setProduct] = useState<ProductDTO>();

    useEffect(() => {

        productService.findById(Number(params.productId))
            .then(response => {
                console.log(response.data);
                setProduct(response.data);
            });
    },
        []);

    return (
        //fragment <> ... </>
        <main>
            <section id="dsc-product-details-section" className="dsc-container">
                {/* passo product como argumento. 'product &&' força uma verificação se este é realmente um Obj ProductDTO (e ñ undefined) */}
                {
                    product &&
                    <ProductDetailsCard product={product} />
                }

                <div className="dsc-btn-page-container">
                    <ButtonPrimary text="Comprar" />
                    <Link to={"/"}>
                        <ButtonInverse text="Início" />
                    </Link>
                </div>
            </section>
        </main>
    );
}