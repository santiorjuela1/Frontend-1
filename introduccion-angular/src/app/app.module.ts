import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './componentes/padre/padre.component';
import { HijoComponent } from './componentes/hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CardModule } from 'primeng/card';
import { UserComponent } from './componentes/user/user.component';
import { ServicioDirective } from './varios/servicio.directive';
import { ServicioService } from './varios/servicio.service';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    UserComponent,
    ServicioDirective,
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
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
