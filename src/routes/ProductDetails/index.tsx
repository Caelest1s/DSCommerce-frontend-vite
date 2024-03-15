import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard/ProductDetailsCard";
import { ProductDTO } from "../../models/product";
import './styles.css';

const product: ProductDTO = {
    id: 2,
    name: "Smart TV",
    description: "Esta TV é TOP",
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
    price: 2500.99,
    categories: [
        {
            id: 2,
            name: "Eletrônicos"
        },
        {
            id: 3,
            name: "Computadores"
        },
        {
            id: 4,
            name: "Importados"
        }
    ]
}

export default function ProductDetails() {
    return (
        //fragment <> ... </>
        // ln 34 --> passo product como argumento
        <>
            <HeaderClient />
            <main>
                <section id="dsc-product-details-section" className="dsc-container">
                    <ProductDetailsCard product={product}/>

                    <div className="dsc-btn-page-container">
                        <ButtonPrimary name="Comprar"/>
                        <ButtonInverse name="Início"/>
                    </div>
                </section>
            </main>
        </>
    );
}