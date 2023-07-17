import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-episode-dialog',
  templateUrl: './episode-dialog.component.html',
  styleUrls: ['./episode-dialog.component.css']
})
export class EpisodeDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service : RickAndMortyService) { 
  }

  episodeInformation : any;
  episoseClickedId : number = this.data.id-1;

  ngOnInit(): void {  
    this.getAllVariables();
  }


  getAllVariables(){
    this.service.getAllEpisodes().subscribe((episodios) =>{
        this.data = episodios.results;
        this.episodeInformation = this.data[this.episoseClickedId];
    },
    (error) =>{
      console.log(error);
    });
  }
}


