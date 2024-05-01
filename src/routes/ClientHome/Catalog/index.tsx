import { useEffect, useState } from 'react';
import ButtonNextPage from '../../../components/ButtonNextPage';
import CatalogCard from '../../../components/CatalogCard';
import SearchBar from '../../../components/SearchBar';
import { ProductDTO } from '../../../models/product';
import * as productService from '../../../services/product-service';
import './styles.css';


export default function Catalog() {

    /* seta um array productDTO*/
    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [productName, setProductName] = useState("");

    useEffect(() => {
        productService.findPageRequest(0, productName)
            .then(response => {
                setProducts(response.data.content);
            });
    }, [productName]);

    function handleSearch(searchText: string){
        setProductName(searchText);
    }

    return (
        <main>
            <section id="dsc-catalog-section" className="dsc-container">
                <SearchBar onSearch={handleSearch}/>

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