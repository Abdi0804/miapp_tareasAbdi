import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { from } from 'rxjs';

@Component({
  selector: 'app-rtareas',
  templateUrl: './rtareas.component.html',
  styleUrls: ['./rtareas.component.css']
})
export class RtareasComponent {

  
  
  regtareas: FormGroup;

  public tareas: Array<string> = [];
  item : string;

  public tarea: string="";
  public registro: string="";
  public mensaje: string ="";


  constructor(
    public fb: FormBuilder
  ) {
    this.regtareas = this.fb.group({
      
      tarea: ['', [Validators.required,Validators.minLength(5)]]
    });
    
  }

  
  registrar(values){
    console.log(values);
}

guardarArray(){
this.tareas.push(this.item);
this.item="";
localStorage.setItem('tareas', JSON.stringify(this.tareas));

}

mostrarArray(){
this.tareas = JSON.parse(localStorage.getItem('tareas'));
}

/*onSubmit(){
  this.registro =  this.tarea ;
  this.tareas.push(this.registro);
  console.log(this.tarea);
}*/

empty() {
  //empty your array
  this.tareas.length = 0;
}

onDelete(){
  this.empty();
  console.log(this.tareas);
}

isDisabled : boolean;


}





