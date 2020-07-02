import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regnotas',
  templateUrl: './regnotas.component.html',
  styleUrls: ['./regnotas.component.css']
})
export class RegnotasComponent {

 
  rnotas: FormGroup;

  public notas: Array<string> = [];
  public nota: string="";
  public desc: string="";
  public registro: string="";
  public mensaje: string ="";

  
  public fechaActual = new Date();

  constructor(
    public fb: FormBuilder
  ) {
    this.rnotas = this.fb.group({
      
      nota: ['', [Validators.required,Validators.minLength(10)]],
      desc: ['', [Validators.required,Validators.minLength(15)]]
    });
    
    
  }

  
  registrar(values){
    console.log(values);
}

onSubmit(){
  this.registro =  " TITULO: " + this.nota + " Descripcion de la nota: " + this.desc;
  this.notas.push(this.registro);
  console.log(this.notas);
}

empty() {
  //empty your array
  this.notas.length = 0;
}

onDelete(){
  this.empty();
  console.log(this.notas);
}

  

}
