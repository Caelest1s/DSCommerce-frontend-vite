import ButtonNextPage from '../../components/ButtonNextPage';
import CatalogCard from '../../components/CatalogCard';
import HeaderClient from '../../components/HeaderClient';
import SearchBar from '../../components/SearchBar';
import { ProductDTO } from '../../models/product';
import './styles.css';

const product: ProductDTO = {
    id: 2,
    name: "Smart TV",
    description: "Computador Gamer XT com suporte e 16GB de memória e processador turbo plus",
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

export default function () {
    return (
        <>
            <HeaderClient />
            
            <main>
                <section id="dsc-catalog-section" className="dsc-container">
                    <SearchBar />

                    <div className="dsc-catalog-cards dsc-mt20 dsc-mb20">
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                    </div>

                    <ButtonNextPage text="Carregar mais"/>

                </section>
            </main>
        </>
    );
}