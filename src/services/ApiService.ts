import type { AxiosResponse } from "axios";
import axios from "axios";
import JwtService from "../services/JwtService";


axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

/**
 * @description service to call HTTP request via Axios
 */
class ApiService {
  /**
  /**
   * @description Retry the original request with a new token
   * @param originalRequest: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */


  /**
   * @description set the default HTTP request headers
   */
  public static setHeader(): void {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${JwtService.getToken()}`;
    axios.defaults.headers.common["Content-Type"] =
      "application/json";
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static query(resource: string, params: any): Promise<AxiosResponse> {
    return axios.get(resource, params);
  }

  /**
   * @description send the GET HTTP request
   * @param resource: string
   * @param slug: string
   * @returns Promise<AxiosResponse>
   */
  public static get(resource: string, slug = "" as string): Promise<AxiosResponse> {
    return axios.get(`${resource}`);
  }

  /**
   * @description set the POST HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static post(resource: string, params: any): Promise<AxiosResponse> {
    ApiService.setHeader();
    return axios.post(`${resource}`, params);
  }

  /**
   * @description send the UPDATE HTTP request
   * @param resource: string
   * @param slug: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static update(
    resource: string,
    slug: string,
    params: any
  ): Promise<AxiosResponse> {
    return axios.put(`${resource}/${slug}`, params);
  }

  /**
   * @description Send the PUT HTTP request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static put(resource: string, params: any): Promise<AxiosResponse> {
    return axios.put(`${resource}`, params);
  }

  /**
   * @description Send the DELETE HTTP request
   * @param resource: string
   * @returns Promise<AxiosResponse>
   */
  public static delete(resource: string): Promise<AxiosResponse> {
    ApiService.setHeader()
    return axios.delete(resource);
  }
}

export default ApiService;
