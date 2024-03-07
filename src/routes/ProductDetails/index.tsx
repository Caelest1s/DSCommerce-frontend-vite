import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard/ProductDetailsCard";
import './styles.css';

export default function ProductDetails() {
    return (
        //fragment <> ... </>
        <>
            <HeaderClient />
            <main>
                <section id="dsc-product-details-section" className="dsc-container">
                    <ProductDetailsCard />

                    <div className="dsc-btn-page-container">
                        <ButtonPrimary />
                        <ButtonInverse />
                    </div>
                </section>
            </main>
        </>
    );
}