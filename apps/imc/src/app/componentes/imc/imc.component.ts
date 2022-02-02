import { Component, OnInit } from '@angular/core';
import { Tipologia, Resultado } from './tipos';

@Component({
  selector: 'imc-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {

  public resultado: any;

  constructor() {

  }


  ngOnInit(): void {

  }

  imcCalculado(r: Resultado): void {
    this.resultado = r;
  }
}
