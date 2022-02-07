import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Imc, Resultado, Tipologia } from '../tipos';

@Component({
  selector: 'angular-repo-entrada-datos',
  templateUrl: './entrada-datos.component.html',
  styleUrls: ['./entrada-datos.component.css'],
})
export class EntradaDatosComponent implements OnInit {
  @Output()
  public resultadoEvent = new EventEmitter<Resultado>();

  @Output()
  public hideResultsEvent = new EventEmitter<boolean>();

  @Output()
  public showErrorEvent = new EventEmitter<string>();

  public peso: number;
  public altura: number;

  private imc: Imc | null;
  private resultado: Resultado;

  ngOnInit(): void {}

  constructor() {
    this.peso = 0;
    this.altura = 0;

    this.imc = null;
    this.resultado = { imc: 0.0, tipologia: Tipologia.UNNASIGNED };
  }

  calcularIMC() {
    if (this.peso < 1) {
      this.showError('El peso debe ser mayor que cero');
      return;
    }

    if (this.altura < 1) {
      this.showError('La altura debe ser mayor que cero');
      return;
    }

    this.imc = new Imc(this.peso, this.altura / 100);

    this.resultado = this.imc.calcularIMC();

    this.emitResultado();
  }

  hideResults() {
    this.hideResultsEvent.emit(true);
  }

  showError(msg: string): void {
    console.log('show error : ' + msg);
    this.showErrorEvent.emit(msg);
  }

  emitResultado(): void {
    this.resultadoEvent.emit(this.resultado);
  }
}
