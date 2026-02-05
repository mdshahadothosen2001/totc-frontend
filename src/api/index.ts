import Axios from "axios";
import { API_SERVER } from "./../constants/apiServer";
import { getValidAccessToken } from "./tokenUtils";
import { secureStorage } from "../utils/SecureStorage";
import Swal from "sweetalert2";

// apiInstance: For authenticated API calls (requires token)
const apiInstance = Axios.create({
	baseURL: `${API_SERVER}`,
	timeout: 30000, // 30 seconds timeout
	headers: {
		"Content-Type": "application/json",
	},
});

// authInstance: For public auth endpoints (login, register, refresh - no token required)
const authInstance = Axios.create({
	baseURL: `${API_SERVER}`,
	timeout: 30000, // 30 seconds timeout
	headers: {
		"Content-Type": "application/json",
	},
});

export { apiInstance, authInstance };

// Request interceptor: Add token to authenticated requests
apiInstance.interceptors.request.use(
	async (config) => {
		try {
			// Block all API requests during logout process
			if (isLoggingOut) {
				// Cancel the request silently during logout
				return Promise.reject({
					message: "Request cancelled: logout in progress",
					__CANCELLED_BY_LOGOUT__: true,
				});
			}

			const token = await getValidAccessToken();
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			// If the request body is FormData, remove the default JSON Content-Type header
			// so the browser/axios can set the correct multipart/form-data boundary header.
			// This prevents FormData from being sent as an empty JSON object ({}).
			if (config.data instanceof FormData) {
				if (config.headers) {
					// headers can be AxiosHeaders or plain object; use bracket access
					try {
						delete (config.headers as any)["Content-Type"];
					} catch {
						// ignore if deletion fails for some header representation
					}
				}
			}
			return config;
		} catch (error) {
			return Promise.reject(error);
		}
	},
	(error) => Promise.reject(error)
);

// Prevent duplicate auth alerts
let isShowingAuthAlert = false;

// Track if we're in the middle of a logout process
let isLoggingOut = false;

// Export function to set logout flag
export const setIsLoggingOut = (value: boolean) => {
	isLoggingOut = value;
};

// Response interceptor: Handle auth errors
apiInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		// Silently ignore requests cancelled by logout
		if (error.__CANCELLED_BY_LOGOUT__) {
			return Promise.reject(error);
		}

		if (error.response?.status === 401) {
			// Clear tokens on 401
			secureStorage.clearAll();

			// Only show "Session Expired" alert if user is NOT intentionally logging out
			// and if we're not already showing an alert
			if (!isLoggingOut && !isShowingAuthAlert) {
				isShowingAuthAlert = true;
				Swal.fire({
					title: "Session Expired",
					text: "Please log in again.",
					icon: "warning",
					confirmButtonText: "OK",
				}).then(() => {
					isShowingAuthAlert = false;
					window.location.href = "/login";
				});
			}
		} else if (error.response?.status === 403) {
			// Don't show access denied during logout
			if (!isLoggingOut) {
				Swal.fire({
					title: "Access Denied",
					text: "You don't have permission to access this resource.",
					icon: "error",
					confirmButtonText: "OK",
				});
			}
		}
		return Promise.reject(error);
	}
);

// authInstance: No request interceptor (no token needed for login/register)
// Only basic error handling
authInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		// Don't show alerts for auth errors (handled by components)
		return Promise.reject(error);
	}
);
