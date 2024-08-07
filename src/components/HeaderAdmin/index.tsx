import { NavLink } from 'react-router-dom';
import homeIcon from '../../assets/home.svg';
import ProductsIcon from '../../assets/products.svg';
import LoggedUser from '../LoggedUser';
import './styles.css';

export default function HeaderAdmin() {
    return (
        <header className="dsc-header-admin">
            <nav className="dsc-container">
                <h1>DSC Admin</h1>
                <div className="dsc-navbar-right">
                    <div className="dsc-menu-items-container">
                        <NavLink
                            to="/admin/home"
                            className={({ isActive }) => isActive ? "dsc-menu-item-active" : ""}>
                            <div className="dsc-menu-item">
                                <img src={homeIcon} alt="Início" />
                                <p>Início</p>
                            </div>
                        </NavLink>
                        <NavLink
                            to="/admin/products"
                            className={({ isActive }) => isActive ? "dsc-menu-item-active" : ""}>
                            <div className="dsc-menu-item">
                                <img src={ProductsIcon} alt="Cadastro de produtos" />
                                <p>Produtos</p>
                            </div>
                        </NavLink>
                    </div>
                    <LoggedUser />
                </div>
            </nav>
        </header>
    );
}