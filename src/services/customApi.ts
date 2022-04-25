import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export interface ServerResponse<T> {
    data: T;
    next_page?: number;
}

const api = axios.create({
    baseURL: "https://reqres.in/api",
    headers: {},
});

async function get<T>(url: string, config: AxiosRequestConfig = {}) { 
    try {
        const {data} = await api.get<AxiosResponse<T>>(url, config);
        return data;
    } catch (err) {
        throw err
    }
}

export { get }
