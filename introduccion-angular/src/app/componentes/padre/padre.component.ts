import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Libro } from 'src/models/Libro';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  constructor() {}

  public mensajePadre: string = 'No he recibido nada';

  public libro: Libro = new Libro();

  value = '';

  ngOnInit() {}

  // enviarMensaje() {
  //   this.mensajeHijo = [
  //     { autor: 'Juan', titulo: 'Nuevo libro', idLibro: 1 },
  //     { autor: 'Oscar', titulo: 'El gran libro', idLibro: 200 },
  //   ];
  // }

  public formLibro = new FormGroup({
    idLibro: new FormControl(null),
    autor: new FormControl('', [Validators.required, Validators.minLength(5)]),
    titulo: new FormControl('', Validators.required),
  });

  recibirMensaje($event: string) {
    this.mensajePadre = $event;
    console.log($event);
  }

  mostrarLibro() {
    console.log(this.libro);
  }

  enviarLibro() {
    let libro = {
      idLibro: this.formLibro.get('idLibro')?.value,
      autor: this.formLibro.get('autor')?.value,
      titulo: this.formLibro.get('titulo')?.value,
    };

    this.libro = libro;

    console.log(this.libro);
  }
}
