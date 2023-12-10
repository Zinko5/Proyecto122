import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  url='http://localhost/comprapumba/';

  constructor(private http: HttpClient) { }

  recuperarTodos(){
    return this.http.get(`${this.url}recuperatodos.php`);
  }

  alta(compra:any){
    return this.http.post(`${this.url}alta.php`, JSON.stringify(compra));
  }

  baja(idcompra:number){
    return this.http.get(`${this.url}baja.php?idcompra=${idcompra}`);
  }

  seleccionar(idcompra:number){
    return this.http.get(`${this.url}seleccionar.php?idcompra=${idcompra}`);
  }


  modificacion(compra:any) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(compra));
  }



}
