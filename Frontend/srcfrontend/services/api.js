import axios from "axios";

/**
 * Configuración base de la instancia de Axios para la API
 * 
 * Crea una instancia de Axios con la URL base del backend.
 * Todas las peticiones HTTP a la API utilizarán esta configuración.
 * 
 * Base URL: http://localhost:8080/ecommerce
 */

const api = axios.create({
    baseURL: "http://localhost:8080/ecommerce",
});

export default api;
