import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/* import * as $ from 'jquery'; */
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
 
  }

  getData2(){
    return this.http.get('https://picsum.photos/v2/list?page=2&limit=10')
 
  }
 
}