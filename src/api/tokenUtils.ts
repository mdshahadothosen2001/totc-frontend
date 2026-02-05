// Always get a valid access token — if it’s not available, obtain a new one using the refresh token.


import AuthApi from "./auth";
import { secureStorage } from "../utils/SecureStorage";

// Prevent duplicate refresh calls
let isRefreshing = false;
let refreshPromise: Promise<string | null> | null = null;

const isTokenExpired = (token: string | null): boolean => {
    if (!token) return true;

    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const expiry = payload.exp * 1000;
        const BUFFER = 60 * 1000; // 1 minute buffer to refresh before expiry
        return Date.now() > (expiry - BUFFER);
    } catch {
        return true;
    }
};

const refreshAccessToken = async (): Promise<string | null> => {
    // If already refreshing, wait for that promise
    if (isRefreshing && refreshPromise) {
        return refreshPromise;
    }

    const refreshToken = secureStorage.getRefreshToken();
    if (!refreshToken) return null;

    // Set refreshing flag and create promise
    isRefreshing = true;
    refreshPromise = (async () => {
        try {
            const response = await AuthApi.RefreshToken({ refresh: refreshToken });
            const newAccessToken = response.data.access;
            secureStorage.setAccessToken(newAccessToken);
            return newAccessToken;
        } catch (error) {
            console.error('Failed to refresh access token', error);
            secureStorage.clearAll();
            return null;
        } finally {
            // Reset flags after refresh completes
            isRefreshing = false;
            refreshPromise = null;
        }
    })();

    return refreshPromise;
};

export const getValidAccessToken = async (): Promise<string | null> => {
    let accessToken = secureStorage.getAccessToken();
    
    if (!accessToken || isTokenExpired(accessToken)) {
        accessToken = await refreshAccessToken();
    }
    
    return accessToken;
};
