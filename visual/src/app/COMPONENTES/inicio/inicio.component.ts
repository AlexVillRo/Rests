import { Component, OnInit } from '@angular/core';
import { EmpleadoService,Empleado } from 'src/app/SERVICES/empleado.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ListarEmpleado: Empleado[];
  constructor(private Empleadoservice:EmpleadoService, private router:Router) { }

  ngOnInit(): void {
this.listarEmpleados();
  }
listarEmpleados(){
  this.Empleadoservice.getEmpleado().subscribe(
    res=>{
      console.log(res)
      this.ListarEmpleado=<any>res;
    },
    err=> console.log(err)
  );
  }
  eliminar(Id:any){
    this.Empleadoservice.elimiarEmpleado(Id).subscribe(
      res=>{
        console.log('Empleado borrado')
      },
      err=> console.log(err)
    )


  }

  modificar(Id:any){
    this.router.navigate(['/edit/'+Id])

  }
}
