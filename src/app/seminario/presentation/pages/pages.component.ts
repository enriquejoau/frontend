import { Component, OnInit } from '@angular/core';
import { Seminario } from 'src/app/models/Seminario';
import { SeminarioServicesService } from '../../seminario-services.service';
import swal from 'sweetalert2';

@Component({
  selector: 'adra-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  semi:Seminario[]=[];
  inSeminario: Seminario = new Seminario();
  constructor(private seminario:SeminarioServicesService) { }
  status:boolean=true;
  idSeminario:any=0;
 

  ngOnInit(): void {
    this.traerSeminario()
     
  }
  EditarAgregarSeminario(){
    this.status=true;
  }

  CambiarEstado(id:any){
  this.status=false;
  this.idSeminario=id;
  this.seminario.buscarSeminarioId(id).subscribe(e=>{
    console.log(e)
    this.inSeminario.nombre=e.nombre;
    this.inSeminario.url=e.url;
    this.inSeminario.fecha_inicio=e.fecha_inicio;
    this.inSeminario.fecha_fin= e.fecha_fin;
  })
  }

  EditarSeminario(){
      swal
        .fire({
          title: "<h1 style='color:blue'>Editar</h1>",
          text: '¿Desea editar el Seminario?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Confirmar',
          cancelButtonText: 'Cancelar',
          cancelButtonColor: '#DD6B55',
          footer: '<span class="red">Lea antes de confirmar</span>',
          allowOutsideClick: false,
        })
        .then((resultado) => {
          if (resultado.value) {
            this.seminario.editarSeminario(this.idSeminario,this.inSeminario).subscribe();
            // Hicieron click en "Sí"
            swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Tu Modulo se actualizo con exito',
              showConfirmButton: false,
              timer: 1500,
            });
            this.limpiarSeminario();
          } else {
            // Dijeron que no
            this.limpiarSeminario();
            console.log('NO se elimina la venta');
          }
        });
    }
 
  GuardarSeminario(){
    console.log(this.inSeminario)
     {
      swal
        .fire({
          title: "<h1 style='color:blue'>Agregar</h1>",
          text: '¿Desea Agregar este Seminario ?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Confirmar',
          cancelButtonText: 'Cancelar',
          cancelButtonColor: '#DD6B55',
          footer: '<span class="red">Lea antes de confirmar</span>',
          allowOutsideClick: false,
        })
        .then((resultado) => {
          if (resultado.value) {
            this.seminario.insertarSeminario(this.inSeminario).subscribe();
              swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Tu Seminario se Guardo con exito',
              showConfirmButton: false,
              timer: 1500,
            }); 
            this.traerSeminario()
            this.limpiarSeminario()  
          } else {
          this.limpiarSeminario()
          }
        });
    }
  }
  limpiarSeminario(){
    this.inSeminario.nombre="";
    this.inSeminario.url="";
    this.inSeminario.fecha_inicio="";
    this.inSeminario.fecha_fin="";
    this.idSeminario=0;
  }
  traerSeminario(){
    this.seminario.getSeminarios().subscribe(listas=>{
      this.semi=listas;
    });
 }  
}
