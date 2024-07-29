import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

export function findAllRequest() {
    const config: AxiosRequestConfig = {
        method: "GET",
        url: "/categories",
    }
    // axios.get(`${BASE_URL}/products?size=12`)
    return requestBackend(config);
}