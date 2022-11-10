import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tourist } from './tourist';

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  private baseURL = "http://localhost:8999/pass/sort";
  
  constructor(private httpClient: HttpClient) { }
  getTouristsList(): Observable<Tourist[]>{
    return this.httpClient.get<Tourist[]>(`${this.baseURL}`);

  }
  private baseURLL="http://localhost:8999/pass/add";
  registerUser(tourist:Tourist):Observable<object>{
    console.log(tourist);
    return this.httpClient.post(`${this.baseURLL}`,tourist);
    
  }
}
