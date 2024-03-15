import ButtonNextPage from '../../components/ButtonNextPage';
import CatalogCard from '../../components/CatalogCard';
import HeaderClient from '../../components/HeaderClient';
import SearchBar from '../../components/SearchBar';
import './styles.css';

export default function () {
    return (
        <>
            <HeaderClient />
            
            <main>
                <section id="dsc-catalog-section" className="dsc-container">
                    <SearchBar />

                    <div className="dsc-catalog-cards dsc-mt20 dsc-mb20">
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                    </div>

                    <ButtonNextPage name="Carregar mais"/>

                </section>
            </main>
        </>
    );
}