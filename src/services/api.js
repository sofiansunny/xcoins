import axios from 'axios';

const StatusCode = {
  Unauthorized: 401,
  Forbidden: 403,
  TooManyRequests: 429,
  InternalServerError: 500,
};

const headers = {
  Accept: 'application/json',
};

// We can use the following function to inject the JWT token through an interceptor
// We get the `accessToken` from the localStorage that we set when we authenticate
/* const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  try {
    const token = localStorage.getItem('accessToken');
    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    throw new Error();
  }
}; */

class Http {
  instance = null;

  get http() {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const httpInstance = axios.create({
      baseURL: 'http://api.exchangeratesapi.io/v1/',
      headers,
      withCredentials: true,
      data: undefined
    });

    /*    httpInstance.interceptors.request.use(injectToken, error =>
      Promise.reject(error),
    ); */

    httpInstance.interceptors.response.use(
      response => response,
      error => {
        const {response} = error;
        return this.handleError(response);
      },
    );

    this.instance = httpInstance;
    return httpInstance;
  }

  request(config) {
    return this.http.request(config);
  }

  get(url, config) {
    return this.http.get('latest?access_key=ecc92ddfc355cb6aa42280b32b9c08ad', config);
  }

  post(url, data, config) {
    return this.http.post(url, data, config);
  }

  put(url, data, config) {
    return this.http.put(url, data, config);
  }

  delete(url, config) {
    return this.http.delete(url, config);
  }

  // Handle global app errors
  // We can handle generic app errors depending on the status code

  handleError(error) {
    const {status} = error;

    switch (status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        break;
      }
      case StatusCode.Forbidden: {
        // Handle Forbidden
        break;
      }
      case StatusCode.Unauthorized: {
        // Handle Unauthorized
        break;
      }
      case StatusCode.TooManyRequests: {
        // Handle TooManyRequests
        break;
      }
    }

    return Promise.reject(error);
  }
}

export const http = new Http();
