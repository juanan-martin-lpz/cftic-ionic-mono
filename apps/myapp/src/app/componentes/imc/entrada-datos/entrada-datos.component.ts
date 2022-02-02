import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Imc, Resultado, Tipologia } from '../tipos';

@Component({
  selector: 'myapp-entrada-datos',
  templateUrl: './entrada-datos.component.html',
  styleUrls: ['./entrada-datos.component.css']
})
export class EntradaDatosComponent implements OnInit {

  @Output()
  public resultadoEvent = new EventEmitter<Resultado>();

  public peso: number;
  public altura: number;

  private imc: Imc | null;
  private resultado: Resultado;

  ngOnInit(): void {
  }


  constructor() {
    this.peso = 0;
    this.altura = 0;

    this.imc = null;
    this.resultado = { imc: 0.0, tipologia: Tipologia.UNNASIGNED };
  }


  calcularIMC() {

    this.imc = new Imc(this.peso, this.altura / 100);

    this.resultado = this.imc.calcularIMC();

    this.emitResultado();
  }

  emitResultado(): void {
    this.resultadoEvent.emit(this.resultado);
  }

}
