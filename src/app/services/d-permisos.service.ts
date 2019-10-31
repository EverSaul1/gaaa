import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dpermisos } from '../interfaces/dpermiso';
@Injectable({
  providedIn: 'root'
})
export class DPermisosService {

  API_ENDPOINT = 'http://127.0.0.1:8000/api';
  constructor( private httpClient:HttpClient) { }
  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/dpremios');
    
  }
  save(dpremios: Dpermisos){
    const headers = new HttpHeaders({'Content-type': 'applicacion/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/dpremios' , dpremios, {headers:headers});
  }
  put(dpremios){
    const headers = new HttpHeaders({'Content-type': 'applicacion/json'});
    return this.httpClient.put(this.API_ENDPOINT + '/dpremios/' + dpremios.id , dpremios, {headers:headers});
  }
  delete(id){
    return this.httpClient.delete(this.API_ENDPOINT + '/dpremios/' + id);
  }
}
