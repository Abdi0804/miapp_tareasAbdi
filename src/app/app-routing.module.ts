import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './componentes/nav/nav.component';
import { NotasComponent } from './componentes/notas/notas.component';
import { TareasComponent } from './componentes/tareas/tareas.component';


const routes: Routes = [
  {path: 'Tareas', component: TareasComponent},
  {path: 'Notas', component: NotasComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'Tareas'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
