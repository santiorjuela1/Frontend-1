import { Component, OnInit} from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { MatTableDataSource } from '@angular/material/table';

export interface EpisodeRaM {
  id : number;
  episode : string;
  name : string;
  airDate : string;
}

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.css']
})

export class RickAndMortyComponent implements OnInit {
  constructor(private service: RickAndMortyService) {}

  allEpisodesToBeShown : EpisodeRaM[] =[];
  displayedColumns: string[] = ['id', 'episode', 'name', 'airDate'];
  dataSource = new MatTableDataSource<EpisodeRaM>(this.allEpisodesToBeShown);

  public allEpisodes: any[] = [];

  ngOnInit(): void {
    this.getAllEpisodes();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public getAllEpisodes() {
    this.service.getAllEpisodes().subscribe((episodios) => {
      this.allEpisodes = episodios.results;
      console.log(this.allEpisodes);

      this.allEpisodesToBeShown = this.allEpisodes.map((eachEpisode) => {
        return {
          id: eachEpisode.id,
          episode: eachEpisode.episode,
          name: eachEpisode.name,
          airDate: eachEpisode.air_date
        };
      });

      this.dataSource.data = this.allEpisodesToBeShown;
    });
  }
}
