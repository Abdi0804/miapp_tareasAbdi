import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { RtareasComponent } from './componentes/rtareas/rtareas.component';
import { NotasComponent } from './componentes/notas/notas.component';
import { RegnotasComponent } from './componentes/regnotas/regnotas.component';
import { NavComponent } from './componentes/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    TareasComponent,
    RtareasComponent,
    NotasComponent,
    RegnotasComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
