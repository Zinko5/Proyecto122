import { Component } from '@angular/core';
import { ComprasService } from './compras.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'baseD';
  compras: any;

  enc={
    idcompra:0,
    producto:"",
    preciou:0,
    cantidad:0
  }

  constructor(private comprasServicio: ComprasService){}

  enviarValores(id: string ,producto: string, precio: string) {
    this.enc.idcompra= parseInt(id);
    this.enc.producto = producto;
    this.enc.preciou = parseInt(precio);
  }

  ngOnInit(){
    this.recuperarTodos();
  }

  recuperarTodos(){
    this.comprasServicio.recuperarTodos().subscribe((result:any) => this.compras=result);
  }

  alta(){
    this.comprasServicio.alta(this.enc).subscribe((datos:any)=>{
      if(datos['resultado']=='OK'){
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(idcompra:number) {
    this.comprasServicio.baja(idcompra).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.comprasServicio.modificacion(this.enc).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  seleccionar(idcompra:number) {
    this.comprasServicio.seleccionar(idcompra).subscribe((result:any) => this.enc = result[0]);  
  }
  
  hayRegistros() {
    return true;
  }

}
