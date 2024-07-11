import { getAccessTokenPayload } from "../services/auth-service";

// Declarated ENUM's
export type RoleEnum = "ROLE_ADMIN" | "ROLE_CLIENT";

export type CredentialsDTO = {
    username: string;
    password: string;
};

export type AccessTokenPayloadDTO = {
    exp: number,
    user_name: string,
    authorities: RoleEnum[];
};

export function isAuthenticated(): boolean {
    let tokenPayload = getAccessTokenPayload();
    // Multiplie per 1000 to search Date now
    return tokenPayload && tokenPayload.exp * 1000 > Date.now() ? true : false;
};