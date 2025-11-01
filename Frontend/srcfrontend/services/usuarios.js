import api from "./api";

/**
 * Servicios para interactuar con el endpoint de usuarios de la API
 */

/**
 * Obtiene un usuario específico por su DNI
 * 
 * Realiza una petición GET al endpoint /usuarios/{dni} para obtener
 * los datos de un usuario en particular (nombre, apellido, email, etc.).
 */
export async function getUsuarioByDni(dni) {
    const res = await api.get(`/usuarios/${dni}`);
    return res.data;
}
