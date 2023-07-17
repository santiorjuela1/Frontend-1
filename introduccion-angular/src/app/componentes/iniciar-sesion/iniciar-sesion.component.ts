import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


interface Usuario{
  nombreUsuario : string;
  password : string;
}

const userList: Usuario[] = [
  { nombreUsuario: 'john123', password: 'password123' },
  { nombreUsuario: 'emma456', password: 'qwerty456' },
  { nombreUsuario: 'alex789', password: 'abcdefg789' },
  { nombreUsuario: 'sara12', password: 'test1234' },
  { nombreUsuario: 'mike34', password: 'hello567' },
  { nombreUsuario: 'lucy567', password: 'password123' },
  { nombreUsuario: 'david90', password: 'qwertyuiop90' },
  { nombreUsuario: 'amy123', password: 'pass123' },
  { nombreUsuario: 'ryan456', password: 'password456' },
  { nombreUsuario: 'lisa789', password: 'password789' }
];

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  // Usuario que se registra
  public user !: Usuario;
  public isLogged!: boolean;
  public notLoggedMessage !: string;

  constructor(private router : Router) { 
  }

  ngOnInit(): void {
  }

  public formUsuario = new FormGroup({
    nombreUsuario: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  public getUsuario(){
      this.user = {
      nombreUsuario : this.formUsuario.get('nombreUsuario')?.value,
      password : this.formUsuario.get('password')?.value,
    }
    this.isLogged =  this.userVerification(this.user);
    this.notLoggedMessage = 'User not found';
  }

  public userVerification(usuario : Usuario) : boolean {
    for(const EachUser of userList){
      if(EachUser.nombreUsuario === usuario.nombreUsuario && EachUser.password === usuario.password){
          this.router.navigate(['/rickandmorty']);
          return true;
      }
    }
    console.log("Datos invalidos!");
    return false;
  }
}
