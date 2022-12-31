import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  readonly API_URL;
  constructor(private http: HttpClient) {
    this.API_URL = "http://localhost:3000";
  }

  get(uri: string) {
    return this.http.get(`${this.API_URL}/${uri}`);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.API_URL}/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${this.API_URL}/${uri}`);
  }

}
