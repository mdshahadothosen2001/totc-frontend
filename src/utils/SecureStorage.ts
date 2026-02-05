// frontend-side token & user data management utility


class SecureStorage {
    private accessToken: string | null = null;

    private readonly ACCESS_TOKEN_KEY = '_at';
    private readonly REFRESH_TOKEN_KEY = '_rt';
    private readonly USER_KEY = '_usr';

    private encode(value: string): string {
        return btoa(encodeURIComponent(value));
    }

    private decode(value: string): string {
        try {
            return decodeURIComponent(atob(value));
        } catch {
            return '';
        }
    }

    setAccessToken(token: string): void {
        this.accessToken = token;
        localStorage.setItem(this.ACCESS_TOKEN_KEY, this.encode(token));
    }

    getAccessToken(): string | null {
        if (this.accessToken) {
            return this.accessToken;
        }
        
        const encoded = localStorage.getItem(this.ACCESS_TOKEN_KEY);
        if (encoded) {
            const token = this.decode(encoded);
            this.accessToken = token;
            return token;
        }
        
        return null;
    }

    clearAccessToken(): void {
        this.accessToken = null;
        localStorage.removeItem(this.ACCESS_TOKEN_KEY);
    }

    setRefreshToken(token: string): void {
        localStorage.setItem(this.REFRESH_TOKEN_KEY, this.encode(token));
    }

    getRefreshToken(): string | null {
        const encoded = localStorage.getItem(this.REFRESH_TOKEN_KEY);
        return encoded ? this.decode(encoded) : null;
    }

    clearRefreshToken(): void {
        localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    }

    setUser(user: any): void {
        localStorage.setItem(this.USER_KEY, this.encode(JSON.stringify(user)));
    }

    getUser(): any {
        const encoded = localStorage.getItem(this.USER_KEY);
        if (!encoded) return null;
        try {
            return JSON.parse(this.decode(encoded));
        } catch {
            return null;
        }
    }

    clearUser(): void {
        localStorage.removeItem(this.USER_KEY);
    }

    clearAll(): void {
        this.clearAccessToken();
        this.clearRefreshToken();
        this.clearUser();
    }

    hasTokens(): boolean {
        return !!(this.getAccessToken() || this.getRefreshToken());
    }
}

export const secureStorage = new SecureStorage();
