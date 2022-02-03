import { Component, ElementRef, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import * as Tipos from '../tipos';

@Component({
  selector: 'imc-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit, AfterViewInit {

  @Input()
  public imc: number;

  private fClase: string;

  @ViewChild('imagen') imagen!: ElementRef;


  constructor() {
    this.imc = 0;
    this.fClase = "";
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.crearPuntoImagen();

  }
  private puntoIMCImagen() {

    let clase = "";

    clase = Tipos.greater(31, this.imc) ? "quinto" : clase;
    clase = Tipos.between(25, 31, this.imc) ? "cuarto" : clase;
    clase = Tipos.between(18, 25, this.imc) ? "tercero" : clase;
    clase = Tipos.between(16, 18, this.imc) ? "segundo" : clase;
    clase = Tipos.lesser(16, this.imc) ? "primero" : clase;

    return "punto " + clase;
  }


  // Crea el punto indicativo de l imagen
  crearPuntoImagen() {


    const clases = this.puntoIMCImagen();

    const circulo = document.createElement("div");
    circulo.setAttribute("id", "circulo");
    circulo.setAttribute("class", `${clases} circulo`);

    console.log(this.imagen);

    this.imagen?.nativeElement.appendChild(circulo);


  }

}
