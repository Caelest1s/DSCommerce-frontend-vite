import cartIcon from '../../assets/cart.svg';
import './style.css';

export default function CartIcon() {
    return (
        <>
            <img src={cartIcon} alt="Shopping cart" />
            <div className="dsc-cart-count">
                2
            </div>
        </>
    );
}