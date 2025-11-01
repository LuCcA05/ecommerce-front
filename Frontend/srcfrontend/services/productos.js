import api from "./api";

/**
 * Servicios para interactuar con el endpoint de productos de la API
 */

// Función comentada: Aún no creada en el backend
// export async function getProductos() {
//     const res = await api.get("/productos");
//     return res.data;
// }

/**
 * Obtiene un producto específico por su ID
 * 
 * Realiza una petición GET al endpoint /productos/{id} para obtener
 * los detalles de un producto en particular (nombre, precio, stock, descripción, imagen, etc.).
 */
export async function getProductoById(id) {
    const res = await api.get(`/api/productos/${id}`);
    return res.data;
}
