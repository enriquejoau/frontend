import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../users/model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private personaURL:string  ='http://localhost:9090/persona/';
  constructor(private http: HttpClient) { }

 public lista(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.personaURL + 'listar');
  }

}
