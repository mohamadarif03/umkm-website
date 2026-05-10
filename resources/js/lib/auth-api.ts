import axios from "axios";
import { clearAuthToken, getAuthToken, setAuthToken } from "./auth-token";

type ApiSuccess<T> = {
    status: "success";
    message: string;
    data: T;
};

type ApiError = {
    status: "error";
    message: string;
    errors?: Record<string, string[]>;
};

export type AuthUser = {
    id: number;
    name: string;
    email: string;
    created_at?: string;
    updated_at?: string;
};

type AuthPayload = {
    access_token: string;
    token_type: "Bearer";
    user: AuthUser;
};

type LoginPayload = {
    email: string;
    password: string;
};

type RegisterPayload = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

const api = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = getAuthToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

function unwrapData<T>(response: { data: ApiSuccess<T> }): T {
    return response.data.data;
}

export function getApiErrorMessage(error: unknown): string {
    if (axios.isAxiosError<ApiError>(error)) {
        return error.response?.data?.message ?? error.message;
    }

    if (error instanceof Error) {
        return error.message;
    }

    return "Unknown error";
}

export async function register(payload: RegisterPayload): Promise<AuthUser> {
    const response = await api.post<ApiSuccess<AuthUser>>("/register", payload);
    return unwrapData(response);
}

export async function login(payload: LoginPayload): Promise<AuthPayload> {
    const response = await api.post<ApiSuccess<AuthPayload>>("/login", payload);
    const data = unwrapData(response);
    setAuthToken(data.access_token);
    return data;
}

export async function logout(): Promise<void> {
    await api.post<ApiSuccess<null>>("/logout");
    clearAuthToken();
}

export async function refresh(): Promise<AuthPayload> {
    const response = await api.post<ApiSuccess<AuthPayload>>("/refresh");
    const data = unwrapData(response);
    setAuthToken(data.access_token);
    return data;
}

export async function me(): Promise<AuthUser> {
    const response = await api.get<ApiSuccess<AuthUser>>("/me");
    return unwrapData(response);
}

export function getToken(): string | null {
    return getAuthToken();
}
