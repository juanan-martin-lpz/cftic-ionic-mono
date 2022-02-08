import { Component, OnInit } from '@angular/core';
import { Tipologia, Resultado } from './tipos';

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

  constructor() {
    this.showResults = false;
    this.ashowError = false;
    this.errorMessage = '';
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

  imcCalculado(r: Resultado): void {
    this.resultado = r;
    this.showResults = true;
  }
}
