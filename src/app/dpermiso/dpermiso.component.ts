import { Component, OnInit } from '@angular/core';
import { Dpermisos } from '../interfaces/dpermiso';
import { DPermisosService } from '../services/d-permisos.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dpermiso',
  templateUrl: './dpermiso.component.html',
  styleUrls: ['./dpermiso.component.css']
})
export class DpermisoComponent implements OnInit {
  dpermisos: Dpermisos = {
    detalleDistincion: null,
    institucion:null,
    pais:null,
    fecha:null,
    resolucion:null,
    
  };
  id:any;
  edit: boolean = false;
  dpermisoss : Dpermisos[];
  constructor(private dPermisosService:DPermisosService , private  activatedRoute: ActivatedRoute) { 
  this.id = this.activatedRoute.snapshot.params['id'];
  if(this.id){
    this.edit = true;
    this.dPermisosService.get().subscribe((data : Dpermisos[]) =>{
      this.dpermisoss = data;
      this.dpermisos = this.dpermisoss.find((m) =>{return m.id == this.id});
      console.log(this.dpermisos);
    }, (error) =>{
      console.log(error);
    });
  }else{
    this.edit = false;

  }
}
  ngOnInit() {
  }
  savePremios(){
    if(this.edit){
      this.dPermisosService.put(this.dpermisos).subscribe((data) => {
        alert(' Actualizada');
        
      } ,  (error) =>{
        alert('Ocurrio un error');
      }); 

    }else{
      this.dPermisosService.save(this.dpermisos).subscribe((data) => {
        alert(' Guardada');
        
      } ,  (error) =>{
        alert('Ocurrio un error');
      }); 

    }
    
  }

}
