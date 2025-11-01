import "../styles/Header.css";
import { Link } from "react-router-dom";
import Nav_Categories from "./Nav_Category";

import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";

/**
 * Componente Header
 * 
 * Renderiza el encabezado principal de la aplicación con navegación.
 * Incluye el logo, barra de búsqueda, icono de menú hamburguesa,
 * enlace a "Mi Cuenta" y enlace al carrito de compras.
 * También incluye el componente de navegación por categorías.
 */

function Header() {

    return (
        <>
            {/* Contenedor principal del header */}
            <div className="header-all-contenedor">
                <header className="header">
                    {/* Sección izquierda: Icono de menú hamburguesa */}
                    <div className="header-left">
                        <div className="faBar-icon">
                            <FaBars size={25}/>
                        </div>
                    </div>

                    {/* Logo de la aplicación con enlace a la página principal */}
                    <Link to="/" className="link-logo">
                        <div className="header-logo">
                            <h1>MITINEDA</h1>
                        </div>
                    </Link>

                    {/* Sección central: Barra de búsqueda de productos */}
                    <div className="header-search">
                        <div className="search-box">
                            <FaSearch className="lupa"/>
                            <input 
                                type="text" 
                                className="buscador" 
                                placeholder="Buscar productos..."
                            />
                        </div>
                    </div>

                    {/* Sección derecha: Enlaces a cuenta y carrito */}
                    <div className="header-right">
                        {/* Enlace a la página de login/inicio de sesión */}
                        <Link to="/login" className="link-login">
                            <div className="cuenta-box">
                                <VscAccount className="logo-cuenta" size={25}/>
                                <span>Mi Cuenta</span>
                            </div>
                        </Link>

                        {/* Enlace al carrito de compras */}
                        <Link to="/carrito" className="link-carrito">
                            <div className="cart-icon">
                                <MdOutlineAddShoppingCart size={25}/>
                            </div>
                        </Link>
                    </div>

                </header>
            </div>

            {/* Componente de navegación por categorías */}
            <Nav_Categories />

        </>
    );
};
export default Header