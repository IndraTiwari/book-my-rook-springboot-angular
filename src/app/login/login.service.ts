import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "paste google login url here";

  constructor(private http: HttpClient) { }

  loginGoogle(){
    return this.http.get(this.url);
  }

}
