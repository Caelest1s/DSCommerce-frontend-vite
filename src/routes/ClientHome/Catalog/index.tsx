import ButtonNextPage from '../../../components/ButtonNextPage';
import CatalogCard from '../../../components/CatalogCard';
import SearchBar from '../../../components/SearchBar';
import * as productService from '../../../services/product-service';
import './styles.css';


export default function Catalog() {
    return (
        <main>
            <section id="dsc-catalog-section" className="dsc-container">
                <SearchBar />

                <div className="dsc-catalog-cards dsc-mt20 dsc-mb20">

                    {
                        productService.findAll().map(
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