import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Libro } from 'src/models/Libro';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit {
  constructor() {}

  @Input()
  recibido!: Array<Libro>;

  @Output()
  enviarPapa = new EventEmitter();

  ngOnInit() {
    console.log(this.recibido);
  }

  ngOnChanges() {
    console.log(this.recibido);
  }

  enviar() {
    this.enviarPapa.emit('Hola desde el hijo');
  }
}
