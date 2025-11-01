import { useEffect, useState } from "react";
import { getCategorias } from "../services/categorias";

import "../styles/Nav_Category.css";

/**
 * Componente Nav_Categories
 * 
 * Renderiza la barra de navegación de categorías de productos.
 * Obtiene las categorías desde la API al montar el componente
 * y las muestra en una lista junto con categorías estáticas adicionales.
 */

function Nav_Categories() {
    // Estado para almacenar las categorías obtenidas de la API
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        getCategorias()
            .then(setCategorias)
            .catch(console.error);
    }, []);

    return (
        <div className="main-nav"> 
            <nav className="nav-categ-content">
                <ul className="nav-categ-title">
                    {/* Renderiza las categorías obtenidas de la API */}
                    {categorias.map((cat) => (
                        <li key={cat.id}>{cat.nombre}</li>
                    ))}
                    {/* Categorías estáticas temporales */}
                    <li>Herramientas</li>
                    <li>Deportes</li>
                    <li>Belleza</li>
                    <li>Tecnología</li>
                </ul>
            </nav>
        </div>
    );
}
export default Nav_Categories;