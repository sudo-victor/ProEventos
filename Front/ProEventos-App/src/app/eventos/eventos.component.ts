import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Evento } from '../interfaces/evento';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: Evento[] = [];
  public filteredEventos: Evento[] = [];
  search: string = "";
  widthImg: number = 150;
  isShowImg: boolean = true;


  constructor(
    private eventosService: EventosService
  ) { }

  ngOnInit() {
    this.getEventos();
  }

  public toggleImageState(): void {
    this.isShowImg = !this.isShowImg;
  }

  public getEventos(): void {
    this.eventosService.getEventos().subscribe(response => {
      this.eventos = response
      this.filteredEventos = response;
    })
  }

  public searchByText(): void {
    this.filteredEventos = this.eventos.filter(evento => evento.tema.toLowerCase().includes(this.search.toLowerCase()));
  }

}
