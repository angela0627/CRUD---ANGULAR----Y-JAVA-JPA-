
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = '';
  
  msg:string = '';

  clientes = [
    {'documento': ' 1007876654', nombre: 'Luisa', apellido: 'Martinez', telefono: '312776654', fechanaci: '12/12/1999'},
    {'documento': ' 100975443', nombre: 'Jorge', apellido: 'Lopez', telefono: '3209782548', fechanaci: '12/12/1999'},
    
  ];

  model:any = {};
  model2:any = {};
  

  addCliente():void{
    this.clientes.push(this.model);
    this.msg = 'campo agregado';
  }

  deleteCliente(i):void {
    var answer = confirm('Estas seguro querer eliminarlo?');
    if(answer) {
      this.clientes.splice(i, 1);
      this.msg = 'campo eliminado';
    }
  }

  myValue;
  editCliente(i):void {
    
    this.model2.documento = this.clientes[i].documento;
    this.model2.nombre = this.clientes[i].nombre;
    this.model2.apellido = this.clientes[i].apellido;
    this.model2.telefono = this.clientes[i].telefono;
    this.model2.fechanaci = this.clientes[i].fechanaci;
    this.myValue = i;
  }

  updateCliente():void {
    let i = this.myValue;
    for(let j = 0; j < this.clientes.length; j++){
      if(i == j) {
        this.clientes[i] = this.model2;
        this.msg = 'campo actualizado';
        this.model2 = {};
      }
    }
  }

  closeAlert():void {
    this.msg = '';
  }

}
