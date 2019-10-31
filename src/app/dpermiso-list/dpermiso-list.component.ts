import { Component, OnInit } from '@angular/core';
import { Dpermisos } from '../interfaces/dpermiso';
import { DPermisosService } from '../services/d-permisos.service';

@Component({
  selector: 'app-dpermiso-list',
  templateUrl: './dpermiso-list.component.html',
  styleUrls: ['./dpermiso-list.component.css']
})
export class DpermisoListComponent implements OnInit {

  dpermisos: Dpermisos[];
  constructor(private dPermisosService: DPermisosService) {
    this.getDPermiso();
  }
  getDPermiso() {
    this.dPermisosService.get().subscribe((data: Dpermisos[]) => {
      this.dpermisos = data;
    }, (error) => {

    });
  }

  ngOnInit() {

  }
  delete(id){
    if(confirm('seguro que quieres eliminar esta')){
      this.dPermisosService.delete(id).subscribe((data)=>{
        
        this.getDPermiso();
      },(error)=> {
        alert("error");
      });

    }
    
  }

}
