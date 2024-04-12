import axios from 'axios';
import { useEffect, useState } from 'react';
import ButtonNextPage from '../../../components/ButtonNextPage';
import CatalogCard from '../../../components/CatalogCard';
import SearchBar from '../../../components/SearchBar';
import { ProductDTO } from '../../../models/product';
import './styles.css';


export default function Catalog() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/products?size=12")
        .then(response => {
            setProducts(response.data.content);
        })
    }, [])

    return (
        <main>
            <section id="dsc-catalog-section" className="dsc-container">
                <SearchBar />

                <div className="dsc-catalog-cards dsc-mt20 dsc-mb20">
                    {
                        products.map(
                            /* renderizar uma coleção com react necessário da chave KEY */
                            product => <CatalogCard key={product.id} product={product} />
                        )
                    }
                </div>

                <ButtonNextPage text="Carregar mais" />
            </section>
        </main>
    );
}