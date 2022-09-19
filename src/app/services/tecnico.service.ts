import { Tecnico } from './../models/tecnico';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {
  baseUrl: String= environment.baseUrl;

  constructor(private http:HttpClient) { }
  
  findAll():Observable<Tecnico[]>{
      const url = this.baseUrl + "/tecnicos";
      return this.http.get<Tecnico[]>(url);
  }
}
