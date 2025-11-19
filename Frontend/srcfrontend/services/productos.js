import api from "./api";

/**
 * Servicios para interactuar con el endpoint de productos de la API
 *
 * El backend puede exponer las rutas con el prefijo `/api/productos` (local)
 * o con `/productos` (online). Para soportar ambos entornos intentamos primero
 * la ruta primaria y, si responde 404 o falla por ruta no encontrada, hacemos
 * un fallback a la ruta alternativa.
 */

const PRIMARY_BASE = "/api/productos"; // local (o donde esté /api)
const FALLBACK_BASE = "/productos";    // online (sin /api)

async function tryBoth(requestFnPrimary, requestFnFallback) {
    try {
        return await requestFnPrimary();
    } catch (err) {
        // Si el error fue 404 (ruta no encontrada) o no hay respuesta (network),
        // intentamos la ruta fallback. Para otros códigos HTTP re-throw.
        const status = err?.response?.status;
        const noRoute = status === 404;
        const networkErr = !err?.response;

        if (noRoute || networkErr) {
            try {
                return await requestFnFallback();
            } catch (err2) {
                // Si falla también, lanzar el segundo error para que el caller lo reciba
                throw err2;
            }
        }

        // Error distinto (ej. 500), re-lanzar
        throw err;
    }
}

// Obtener todos los productos
export async function getProductos() {
    const primary = () => api.get(PRIMARY_BASE);
    const fallback = () => api.get(FALLBACK_BASE);

    const res = await tryBoth(primary, fallback);
    return res.data;
}

// Obtener un producto específico por ID
export async function getProductoById(id) {
    const primary = () => api.get(`${PRIMARY_BASE}/${id}`);
    const fallback = () => api.get(`${FALLBACK_BASE}/${id}`);

    const res = await tryBoth(primary, fallback);
    return res.data;
}

// Crear un nuevo producto
export async function createProducto(data) {
    const primary = () => api.post(PRIMARY_BASE, data);
    const fallback = () => api.post(FALLBACK_BASE, data);

    const res = await tryBoth(primary, fallback);
    return res.data;
}

// Actualizar un producto (parcial)
export async function updateProducto(id, data) {
    const primary = () => api.patch(`${PRIMARY_BASE}/${id}`, data);
    const fallback = () => api.patch(`${FALLBACK_BASE}/${id}`, data);

    const res = await tryBoth(primary, fallback);
    return res.data;
}

// Eliminar un producto
export async function deleteProducto(id) {
    const primary = () => api.delete(`${PRIMARY_BASE}/${id}`);
    const fallback = () => api.delete(`${FALLBACK_BASE}/${id}`);

    await tryBoth(primary, fallback);
}
