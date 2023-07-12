import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  urlRickAndMorty = environment.urlRickAndMorty;

  constructor(private http: HttpClient) { }

  
  public getAllEpisodes() {
    return this.http.get<any>(this.urlRickAndMorty + '/episode');
  }
}
