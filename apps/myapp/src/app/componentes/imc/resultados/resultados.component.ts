import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'myapp-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  @Input()
  public resultado: any;

  constructor() {

  }

  ngOnInit(): void {

  }

}
