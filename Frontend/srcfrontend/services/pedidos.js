import api from "./api";

/**
 * Servicios para interactuar con el endpoint de pedidos de la API
 */

/**
 * Obtiene un pedido específico por su ID
 * 
 * Realiza una petición GET al endpoint /pedidos/{id} para obtener
 * los detalles de un pedido en particular.
 */

export async function getPedidoById(id) {
    const res = await api.get(`/pedidos/${id}`);
    return res.data;
}

/**
 * Crea un nuevo pedido
 * 
 * Realiza una petición POST al endpoint /pedidos para crear
 * un nuevo pedido con los datos proporcionados.
 */

export async function createPedido(data) {
    const res = await api.post("/pedidos", data);
    return res.data;
}

/**
 * Actualiza un pedido existente
 * 
 * Realiza una petición PATCH al endpoint /pedidos/{id} para actualizar
 * parcialmente los datos de un pedido existente.
 */

export async function updatePedido(id, data) {
    const res = await api.patch(`/pedidos/${id}`, data);
    return res.data;
}

/**
 * Elimina un pedido
 * 
 * Realiza una petición DELETE al endpoint /pedidos/{id} para eliminar
 * un pedido específico.
 */

export async function deletePedido(id) {
    await api.delete(`/pedidos/${id}`);
}

