
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Educacion:';
  
  msg:string = '';

  employees = [
    {'nombre': 'Luisa', apellido: 'Martinez', institucion: 'Rufino Centro', posicion: 'Profesora'},
    {'nombre': 'Jordy', apellido: 'Guarin',institucion: 'Normal', posicion: 'Rector'},
    {'nombre': 'Angela',apellido: 'Jurado', institucion: 'ITI', posicion: 'Secretaria'}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addEmployee():void{
    this.employees.push(this.model);
    this.msg = 'campo agregado';
  }

  deleteEmployee(i):void {
    var answer = confirm('Estas seguro querer eliminarlo?');
    if(answer) {
      this.employees.splice(i, 1);
      this.msg = 'campo eliminado';
    }
  }

  myValue;
  editEmployee(i):void {
    
    this.model2.nombre = this.employees[i].nombre;
    this.model2.apellido = this.employees[i].apellido;
    this.model2.institucion = this.employees[i].institucion;
    this.model2.posicion = this.employees[i].posicion;
    this.myValue = i;
  }

  updateEmployee():void {
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j) {
        this.employees[i] = this.model2;
        this.msg = 'campo actualizado';
        this.model2 = {};
      }
    }
  }

  closeAlert():void {
    this.msg = '';
  }

}
