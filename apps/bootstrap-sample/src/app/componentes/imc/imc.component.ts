import { Component, OnInit } from '@angular/core';
import { Tipologia, Resultado, ResultadoTrack } from './tipos';

@Component({
  selector: 'angular-repo-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css'],
})
export class ImcComponent implements OnInit {
  public resultado: any;
  public showResults: boolean;
  public ashowError: boolean;
  public errorMessage: string;

  aimc: number[] = [];

  resultadoTrack: ResultadoTrack;

  constructor() {
    this.showResults = false;
    this.ashowError = false;
    this.errorMessage = '';

    this.resultadoTrack = {
      imcAvg: 0,
      desnutrido: 0,
      delgado: 0,
      ideal: 0,
      sobrepeso: 0,
      obeso: 0
    };

  }

  ngOnInit(): void {}

  mshowError(msg: string): void {
    this.ashowError = true;
    this.errorMessage = msg;
  }

  hide() {
    this.showResults = false;
    this.ashowError = false;
  }

  private arrAvg = (arr: number[]) => arr.reduce((a,b) => a + b, 0) / arr.length

  imcCalculado(r: Resultado): void {
    this.resultado = r;
    this.showResults = true;

    this.aimc.push(r.imc);

    this.resultadoTrack.imcAvg = this.arrAvg(this.aimc);

    switch(r.tipologia) {
      case Tipologia.DESNUTRIDO: {
        this.resultadoTrack.desnutrido += 1;
        break;
      }
      case Tipologia.DELGADO: {
        this.resultadoTrack.delgado += 1;
        break;
      }
      case Tipologia.IDEAL: {
        this.resultadoTrack.ideal += 1;
        break;
      }
      case Tipologia.SOBREPESO: {
        this.resultadoTrack.sobrepeso += 1;
        break;
      }
      case Tipologia.OBESO: {
        this.resultadoTrack.obeso += 1;
        break;
      }
      default: break;
    }

  }
}
