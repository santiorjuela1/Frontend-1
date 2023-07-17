import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route : Router) { }

  iniciarSesion : boolean = false;

  ngOnInit(): void {
  }

  goToLogIn(){
    this.route.navigate(['/login']);
  }

  goToHijo(){
    this.route.navigate(['hijo']);
  }

  goToPadre(){
    this.route.navigate(['padre']);
  }

  goToTable(){
    this.route.navigate(['rickandmorty']);
  }
  
}
