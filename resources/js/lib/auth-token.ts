const AUTH_TOKEN_KEY = "umkm_access_token";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

function getCookieValue(name: string): string | null {
    if (typeof document === "undefined") {
        return null;
    }

    const cookies = document.cookie ? document.cookie.split("; ") : [];
    const prefix = `${name}=`;
    const match = cookies.find((entry) => entry.startsWith(prefix));

    if (!match) {
        return null;
    }

    return decodeURIComponent(match.slice(prefix.length));
}

function setCookieValue(name: string, value: string): void {
    if (typeof document === "undefined") {
        return;
    }

    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}; samesite=lax`;
}

function clearCookieValue(name: string): void {
    if (typeof document === "undefined") {
        return;
    }

    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; samesite=lax`;
}

export function getAuthToken(): string | null {
    if (typeof window === "undefined") {
        return null;
    }

    return window.localStorage.getItem(AUTH_TOKEN_KEY) ?? getCookieValue(AUTH_TOKEN_KEY);
}

export function setAuthToken(token: string): void {
    if (typeof window === "undefined") {
        return;
    }

    window.localStorage.setItem(AUTH_TOKEN_KEY, token);
    setCookieValue(AUTH_TOKEN_KEY, token);
}

export function clearAuthToken(): void {
    if (typeof window === "undefined") {
        return;
    }

    window.localStorage.removeItem(AUTH_TOKEN_KEY);
    clearCookieValue(AUTH_TOKEN_KEY);
}
