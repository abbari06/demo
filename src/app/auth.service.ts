import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const url =  'https://app.alfamindstech.com/powermail-dev/users/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(user:any):Observable<any>{
    return this.http.post<any>(url + 'login', user,
  {observe: 'response' as 'body'})
  .pipe(map(user => {
       return user;
  }));
  }
}
