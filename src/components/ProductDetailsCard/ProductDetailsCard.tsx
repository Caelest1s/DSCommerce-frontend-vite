import computerImg from "../../assets/computer.png";
import ProductCategory from "../ProductCategory";
import './styles.css';

export default function ProductDetailsCard() {
    return (

        <div className="dsc-card dsc-mb20">
            <div className="dsc-product-details-top dsc-line-bottom">
                <img src={computerImg} alt="computer" />
            </div>

            <div className="dsc-product-details-bottom">
                <h3>R$ 5.000,00</h3>
                <h4>Computador Gamer XT</h4>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ex a justo vehicula, et
                    vulputate orci sollicitudin. Vestibulum fermentum ornare accumsan. Aenean malesuada ante vel leo
                    posuere, molestie ornare quam rhoncus. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Suspendisse potenti. Aenean vitae dictum lectus. Etiam
                    blandit, magna vel dapibus viverra, nisl ipsum accumsan ipsum, at feugiat tortor turpis in dui.
                    Sed dictum lacus libero, eget commodo metus porttitor non. Aenean tincidunt nisi egestas orci
                    aliquet, egestas malesuada dui dignissim. Nam vel tempus risus. Morbi eget condimentum metus, et
                    vehicula turpis.
                </p>
                <div className="dsc-category-container">
                    <ProductCategory />
                    <ProductCategory />
                </div>
            </div>
        </div>
    );
}