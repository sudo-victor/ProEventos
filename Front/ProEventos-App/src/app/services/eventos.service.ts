import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../interfaces/evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  public apiURL: string = "https://localhost:5001/api/eventos";

  constructor(
    private http: HttpClient
  ) { }

  public getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.apiURL);
  }
}
