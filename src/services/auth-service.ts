import { AxiosRequestConfig } from "axios";
import jwtDecode from "jwt-decode";
import QueryString from "qs";
import * as accessTokenRepository from "../localstorage/access-token-repository";
import { AccessTokenPayloadDTO, CredentialsDTO, RoleEnum } from "../models/auth";
import { requestBackend } from "../utils/requests";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";

export function loginRequest(loginData: CredentialsDTO) {

    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    }

    //format x-www-form-urlencoded
    const requestBody = QueryString.stringify({ ...loginData, grant_type: "password" });

    const config: AxiosRequestConfig = {
        method: "POST",
        url: "/oauth/token",
        data: requestBody,
        headers: headers
    }

    return requestBackend(config);
}

export function logout() {
    accessTokenRepository.remove();
}

export function saveAccessToken(token: string) {
    accessTokenRepository.save(token);
}

export function getAccessToken() {
    return accessTokenRepository.get();
}

export function getAccessTokenPayload(): AccessTokenPayloadDTO | undefined {
    try {
        const token = accessTokenRepository.get();
        return token == null ? undefined : (jwtDecode(token) as AccessTokenPayloadDTO);
    } catch (error) {
        return undefined;
    }
}

export function isAuthenticated(): boolean {
    let tokenPayload = getAccessTokenPayload();
    // Multiplie per 1000 to search Date now
    return tokenPayload && tokenPayload.exp * 1000 > Date.now() ? true : false;
};

export function hasAnyRoles(roles: RoleEnum[]): boolean {
    if (roles.length === 0) {
        return true;
    }

    const tokenPayload = getAccessTokenPayload();

    if (tokenPayload !== undefined) {
        for (var i = 0; i < roles.length; i++) {
            if (tokenPayload.authorities.includes(roles[i])) {
                return true;
            }
        }
        //return roles.some(role => tokenData.authorities.includes(role));
    }
    return false;
}