import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './componentes/padre/padre.component';
import { HijoComponent } from './componentes/hijo/hijo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CardModule } from 'primeng/card';
import { UserComponent } from './componentes/user/user.component';
import { ServicioDirective } from './varios/servicio.directive';
import { ServicioService } from './varios/servicio.service';
import { EditorialComponent } from './componentes/editorial/editorial.component';
import { HttpClientModule } from '@angular/common/http';
import { RickAndMortyComponent } from './componentes/rick-and-morty/rick-and-morty.component';
import {MatTableModule} from '@angular/material/table';
import { PruebaTablasComponent } from './componentes/prueba-tablas/prueba-tablas.component';
import { MenuComponent } from './componentes/menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EpisodeDialogComponent } from './componentes/episode-dialog-component/episode-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    UserComponent,
    ServicioDirective,
    EditorialComponent,
    RickAndMortyComponent,
    PruebaTablasComponent,
    MenuComponent,
    IniciarSesionComponent,
    EpisodeDialogComponent
  ],
  imports: [
    CardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatMenuModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
