const BACKEND_SERVER = import.meta.env.VITE_BACKEND_SERVER || "/api/";
export const API_SERVER = BACKEND_SERVER;

// Debugging: Log the API_SERVER value in development mode
if (import.meta.env.DEV) {
    console.log('API_SERVER configured as:', API_SERVER);
}
