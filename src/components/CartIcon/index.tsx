import { useContext } from 'react';
import cartIcon from '../../assets/cart.svg';
import { ContextCartCount } from '../../utils/context-cart';
import './style.css';

export default function CartIcon() {

    // O localStorage(sincrono) é um componente global, porém não consegue acompanhar as mudanças em tempo real
    //por isto é necessário criar um estado global

    const { contextCartCount } = useContext(ContextCartCount);

    return (
        <>
            <img src={cartIcon} alt="Shopping cart" />
            {
                // condição para caso estiver vazio não apareça
                contextCartCount > 0 &&
                <div className="dsc-cart-count"> {contextCartCount} </div>
            }
        </>
    );
}