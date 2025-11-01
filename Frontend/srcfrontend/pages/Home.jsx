import "../styles/Home.css";
import Header from "../components/Header.jsx";
import ProductoHome from "../components/Product_Home.jsx";

/**
 * Componente Home
 * Renderiza la página principal del ecommerce.
 * Muestra un grid de productos utilizando el componente ProductoHome
 * con diferentes IDs para cada producto.
 */

function Home() {
    return (
        <>
            {/* Header de navegación de la aplicación */}
            <Header />

            {/* Grid principal que contiene todos los productos */}
            <main className="grid-home-prod">
                {/* Renderiza múltiples productos con diferentes IDs */}
                <ProductoHome id={1} />
                <ProductoHome id={2} />
                <ProductoHome id={3} />
                <ProductoHome id={4} />
                <ProductoHome id={4} />
                <ProductoHome id={1} />
                <ProductoHome id={2} />
            </main>
        </>
    );
}

export default Home;
