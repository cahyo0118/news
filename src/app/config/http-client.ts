import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Injectable({ providedIn: 'root' })
export class HTTPClientService {

  httpClient = axios.create({
    timeout: 30000,
  });

  httpAuthClient = axios.create({
    timeout: 30000,
  });

  httpAuthUploadClient = axios.create({
  });

  constructor(
    private router: Router,
  ) {
    this.initHTTPClient();

    // this.initHTTPAuthClient();

    // this.initHTTPAuthUploadClient();
  }

  initHTTPClient() {
    this.httpClient.interceptors.response.use((response) => {
      // Do something with response data
      console.log('from_interceptor', response.data);
      return response;
    }, (error) => {
      // Do something with response error
      console.log('error_from_interceptor', error.response.data);
      return Promise.reject(error);
    });
  }

  // initHTTPAuthClient() {
  //   this.httpAuthClient.interceptors.request.use((request) => {
  //     // Do something with request data
  //     const credentials = JSON.parse(localStorage.getItem('credential'));

  //     if (typeof request.params === 'undefined') {
  //       request.params = {};
  //     }

  //     // tslint:disable-next-line:max-line-length
  //     request.headers.authorization = (typeof credentials !== 'undefined' && credentials) ? `Bearer ${credentials.access_token}` : '';

  //     return request;
  //   }, (error) => {

  //     // Do something with request error
  //     return Promise.reject(error);
  //   });

  //   this.httpAuthClient.interceptors.response.use(
  //     (response) => {
  //       // Do something with request data
  //       // console.log('inteceptor-response', response);
  //       return response;
  //     }, (error) => {

  //       const errorData = JSON.parse(JSON.stringify(error));
  //       console.log('errorData', errorData);

  //       // Do something with request error
  //       // tslint:disable-next-line:triple-equals
  //       if (error.response.status == 401) {
  //         // tslint:disable-next-line:triple-equals
  //         if (window.location.pathname != '/' && window.location.pathname != '/auth/login') {
  //           localStorage.clear();
  //           this.router.navigate(['/']);
  //         }
  //       }

  //       if (errorData.code === 'ECONNABORTED') {
  //         console.log(`A timeout happend on url ${error.config.url}`);
  //         // this.events.publish('request:timeout');
  //       }

  //       return Promise.reject(error);
  //     });
  // }

  // initHTTPAuthUploadClient() {
  //   this.httpAuthUploadClient.interceptors.request.use((request) => {
  //     // Do something with request data
  //     const credentials = JSON.parse(localStorage.getItem('credential'));

  //     if (typeof request.params === 'undefined') {
  //       request.params = {};
  //     }

  //     // tslint:disable-next-line:max-line-length
  //     request.headers.authorization = (typeof credentials !== 'undefined' && credentials) ? `Bearer ${credentials.access_token}` : '';

  //     return request;
  //   }, (error) => {

  //     // Do something with request error
  //     return Promise.reject(error);
  //   });

  //   this.httpAuthUploadClient.interceptors.response.use(
  //     (response) => {
  //       // Do something with request data
  //       // console.log('inteceptor-response', response);
  //       return response;
  //     }, (error) => {

  //       const errorData = JSON.parse(JSON.stringify(error));
  //       console.log('errorData', errorData);

  //       // Do something with request error
  //       // tslint:disable-next-line:triple-equals
  //       if (error.response.status == 401) {
  //         // tslint:disable-next-line:triple-equals
  //         if (window.location.pathname != '/' && window.location.pathname != '/auth/login') {
  //           localStorage.clear();
  //           this.nav.navigateRoot('/')
  //         }
  //       }

  //       if (errorData.code === 'ECONNABORTED') {
  //         console.log(`A timeout happend on url ${error.config.url}`);
  //         // this.events.publish('request:timeout');
  //       }

  //       return Promise.reject(error);
  //     });
  // }

}
