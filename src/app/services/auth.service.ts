import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenPermission = new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient) { 
    this.getToken();

  }


  signUp(value:object):Observable<any>
  {
    return this._HttpClient.post(environment.baseUrl+'signup',value);
  }


  signIn(value:object):Observable<any>
  {
    return this._HttpClient.post(environment.baseUrl+'signin',value);
  }

  getToken(){
    let token:any = localStorage.getItem('MoviesToken');
    this.tokenPermission.next(token);
  }




  
}
