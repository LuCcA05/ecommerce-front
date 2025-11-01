import api from "./api";

/**
 * Servicios para interactuar con el endpoint de categorías de la API
 */

/**
 * Obtiene todas las categorías disponibles
 * 
 * Realiza una petición GET al endpoint /categorias para obtener
 * la lista completa de categorías.
 */

export async function getCategorias() {
    const res = await api.get("/categorias");
    return res.data;
}

/**
 * Obtiene una categoría específica por su ID
 * 
 * Realiza una petición GET al endpoint /categorias/{id} para obtener
 * los detalles de una categoría en particular.
 */
export async function getCategoriaById(id) {
    const res = await api.get(`/categorias/${id}`);
    return res.data;
}