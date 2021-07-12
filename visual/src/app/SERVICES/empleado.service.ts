import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  url="api"
  constructor(private http:HttpClient) { }


  getEmpleado(){
    return this.http.get(this.url);
  }
  getunEmpleado(id:string){
    return this.http.get(this.url+'/'+id);
  }

  agregarEmpleado(empleado:Empleado){
    return this.http.post(this.url,empleado);
  }
  elimiarEmpleado(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  modificarEmpleado(id:number,empleado:Empleado){
    return this.http.put(this.url+'/'+id,empleado);
  }
}

export interface Empleado{
  Id?:string;
  NombreEmpleado?:string;
  Funciones?:string;
  Jefe?:string;
}
