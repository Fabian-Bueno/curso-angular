import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  nombre?: string;

  constructor(private _servicioFamiliar: ServicioFamiliarService) {}

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Juan');
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }

  mensajeRecibido: string = '';

  recibirMensaje($event: string) {
    this.mensajeRecibido = $event;
  }

  saludar() {
    this._servicioFamiliar.saludar(
      this._servicioFamiliar.getHermanoGrande() || ''
    );
  }

  preguntar() {
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }

  // //Contador
  // valorContador: number = 0;
  // mensajePadre = 'Mensaje desde el padre';
  // incrementar() {
  //   this.valorContador++;
  // }
  // decrementar() {
  //   this.valorContador--;
  // }
}
