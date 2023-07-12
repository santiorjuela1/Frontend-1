import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PadreComponent } from './componentes/padre/padre.component';
import { HijoComponent } from './componentes/hijo/hijo.component';
import { UserComponent } from './componentes/user/user.component';
import { EditorialComponent } from './componentes/editorial/editorial.component';

const routes: Routes = [
  { path: 'padre', component: PadreComponent },
  { path: 'hijo', component: HijoComponent },
  { path: 'user', component: UserComponent },
  { path: 'editorial', component: EditorialComponent },
  { path: '**', redirectTo: 'padre' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
