import 'axios';

declare module 'axios' {

  export interface AxiosInstance {
    get: <T = any, R = T, D = any>(url: string, config?: AxiosRequestConfig<D>) => R;
    post: <T = any, R = T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) => R;
    put: <T = any, R = T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) => R;
    delete: <T = any, R = T, D = any>(url: string, config?: AxiosRequestConfig<D>) => R;
    patch: <T = any, R = T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) => R;
  }
}
