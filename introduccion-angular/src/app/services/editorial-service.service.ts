import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Editorial } from '../models/editorial';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditorialServiceService {
  public urlEditorial = environment.urlEditorial;

  constructor(private http: HttpClient) {}

  public enviarEditorial(editorial: Editorial) {
    return this.http.post(this.urlEditorial + '/crearEditorial', editorial);
  }

  public obtenerEditorial(id: number) {
    return this.http.get(this.urlEditorial + '/obtenerEditorial?id=' + id);
  }
}
