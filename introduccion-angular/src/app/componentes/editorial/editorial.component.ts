import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Editorial } from 'src/app/models/editorial';
import { EditorialServiceService } from 'src/app/services/editorial-service.service';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css'],
})
export class EditorialComponent implements OnInit {
  public Ieditorial!: any;
  public editorialObtenido?: Observable<any>;

  public formEditorial = new FormGroup({
    nombreEditorial: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
  });

  constructor(private service: EditorialServiceService) {}

  ngOnInit(): void {}

  public enviarEditorial() {
    let editorial = {
      direccion: this.formEditorial.get('direccion')?.value,
      nombreEditorial: this.formEditorial.get('nombreEditorial')?.value,
    };

    this.service.enviarEditorial(editorial).subscribe((respuesta) => {
      this.Ieditorial = respuesta;
    });
  }

  public obtenerEditorial() {
    this.service.obtenerEditorial(4).subscribe(
      (respuesta) => {
        console.log(respuesta);
      },
      (error) => {
        console.log(error.error.httpCodeMessage);
      }
    );
  }
}
