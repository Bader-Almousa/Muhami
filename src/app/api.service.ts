import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers: HttpHeaders;
  
  constructor(public http: HttpClient) {

    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Content-Type', 'text/plain; charset=utf-8');
   }

  login(logininfo: any ){
    return this.http.post('http://localhost/Projects/Muhami/Backend/login.php',logininfo);
  }

}
