import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'imc-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
})
export class ResultadosComponent implements OnInit {
  @Input()
  public resultado: any;

  public imc_numerico: string;
  public imc_texto: string;

  constructor() {
    this.imc_numerico = "";
    this.imc_texto = "";
  }

  ngOnInit(): void {

    this.imc_numerico = this.resultado.imc.toFixed(2);
    this.imc_texto = this.resultado.tipologia.toString();

  }
}
