import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/models/Libro';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  constructor() {}

  public mensajeHijo: Array<Libro> = new Array<Libro>();

  public mensajePadre: string = 'No he recibido nada';

  public libro: Libro = new Libro();

  value = '';

  ngOnInit() {}

  enviarMensaje() {
    this.mensajeHijo = [
      { autor: 'Juan', titulo: 'Nuevo libro', idLibro: 1 },
      { autor: 'Oscar', titulo: 'El gran libro', idLibro: 200 },
    ];
  }

  recibirMensaje($event: string) {
    this.mensajePadre = $event;
    console.log($event);
  }

  mostrarLibro() {
    console.log(this.libro);
  }
}
