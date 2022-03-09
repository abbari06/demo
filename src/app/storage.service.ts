import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  stroreUserobject(userObj:any){
    localStorage.setItem('user', JSON.stringify(userObj))
  }
  getUserObject(){
    return localStorage.getItem('user');
  }
}
