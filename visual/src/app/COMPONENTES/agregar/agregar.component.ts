import { Component, OnInit } from '@angular/core';
import { Empleado, EmpleadoService } from 'src/app/SERVICES/empleado.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  empleado: Empleado={
    Id:"",
    NombreEmpleado:"",
    Funciones:"",
    Jefe:""

  };
  constructor(private EmpleadoServices:EmpleadoService, private router:Router) { }


  ngOnInit(): void {
  }
  agregar(){
    this.EmpleadoServices.agregarEmpleado(this.empleado).subscribe();
    this.router.navigate(['/inicio'])
  }
}
