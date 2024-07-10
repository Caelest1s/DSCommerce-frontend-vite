import axios, { AxiosRequestConfig } from "axios";
import * as authService from "../services/auth-service";
import { BASE_URL } from "./system";

export function requestBackend(config: AxiosRequestConfig) {

    // the conditions if (ternary)
    const headers = config.withCredentials
        ? {
            ...config.headers,
            Authorization: "Bearer " + authService.getAccessToken()
        }
        : config.headers;

    return axios({ ...config, baseURL: BASE_URL, headers });
}