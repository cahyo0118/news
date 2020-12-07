import { HTTPClientService } from './../config/http-client';
import { Injectable } from '@angular/core';
import { AxiosRequestConfig } from 'axios';

@Injectable({ providedIn: 'root' })
export class APIService {

    constructor(private httpClientService: HTTPClientService) {

    }
    get(endPoint, axiosConfig: AxiosRequestConfig = {}) {
        return this.httpClientService.httpAuthClient.get(endPoint, axiosConfig);
    }

    post(endPoint, data, axiosConfig: AxiosRequestConfig = {}) {
        return this.httpClientService.httpAuthClient.post(endPoint, data, axiosConfig);
    }

    put(endPoint, data, axiosConfig: AxiosRequestConfig = {}) {
        return this.httpClientService.httpAuthClient.put(endPoint, data, axiosConfig);
    }

    delete(endPoint, axiosConfig: AxiosRequestConfig = {}) {
        return this.httpClientService.httpAuthClient.delete(endPoint, axiosConfig);
    }

}