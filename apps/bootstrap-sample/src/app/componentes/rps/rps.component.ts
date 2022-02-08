import { Component, OnInit } from '@angular/core';
import { Marcador, IMarcador } from './tipos';

@Component({
  selector: 'angular-monorepo-rps',
  templateUrl: './rps.component.html',
  styleUrls: ['./rps.component.css']
})
export class RpsComponent implements OnInit {

    public selected?: boolean;
    public resultado?: number;

    private readonly ids_botones = ["piedra", "papel", "tijera"];
    private readonly img_botones = ["rock", "paper", "scissors"];

  /*
      La tabla de decision para determinar el ganador.
      Es un array bidimensional.
      Cada fila corresponde a piedra, papel y tijera, en este orden
      Cada columna corresponde al resultado de cruzar la fila correspondiente y piedra, papel y tijera en este orden
      Para acceder se necesitan dos valores, uno para la fila y otro para la columna, correspondiendo a lo seleccionado por los jugadores A y B
      0 (cero) implica un empate
      1 (uno) implica que A gana
      -1 (menos uno) implica que B gana
  */
    private readonly tabla_decision = [
      [0, -1, 1],
      [1, 0, -1],
      [-1, 1, 0]
    ];

    public marcador: IMarcador;

  constructor() {

      this.selected = false;

      this.marcador = new Marcador();

      let j: any = localStorage.getItem("jugador") || "";
      let c: any = localStorage.getItem("computer") || "";

      j != null ? this.marcador.jugador = parseInt(j) || 0 : this.marcador.jugador = 0;
      c != null ? this.marcador.computer = parseInt(c) || 0: this.marcador.computer = 0;

    }

  ngOnInit(): void {
  }

  selectPlay(play: number) {

    this.selected = true;

    localStorage.setItem("selected", play.toString());

    let img_computer = document.getElementById("computerPlay");

    if (img_computer) {
      img_computer.setAttribute("src", `assets/imagenes/questionmark.png`);
    }


    this.decorateSelectedPlay(play);

    this.resultado = -2;

  }

  decorateSelectedPlay(play:number) {

    let piedra = document.getElementById("piedra");
    let papel = document.getElementById("papel");
    let tijera = document.getElementById("tijera");

    if (piedra!=null)
    {
      piedra.classList.remove("marcada");
    }
    if (papel)//tb se puede preguntar así si es distinto de null
    {
      papel.classList.remove("marcada");
    }
    if (tijera)
    {
      tijera.classList.remove("marcada");
    }

    let boton = document.getElementById(this.ids_botones[play]);

    if (boton)
    {
      boton.classList.add("marcada");
    }


  }

  getComputerPlay():number {
    return Math.floor(Math.random() * 3);
  }

  playNow() {

    //TODO mirar si player sea algo
      let computer = this.getComputerPlay();

      let player = localStorage.getItem("selected");

      if (player)
      {
        let result: number = this.tabla_decision[+player][computer];

        let img_computer = document.getElementById("computerPlay");

        if (img_computer) {
          img_computer.setAttribute("src", `assets/imagenes/${this.img_botones[computer]}.png`);
          img_computer.setAttribute("alt", this.img_botones[computer]);}

          console.log(result);//MOSTRANDO EL RESULTADO
          //DE FORMA IMPLÍCITA
          // 1 GANA EL JUGADOR
          // 0 ES EMPATE
          //TODO: AÑADIR UN MARCARDOR VISUAL
          //QUE SE ACTUALICE POR CADA PARTIDA
          //Y MUESTREL EL RESULTADO DEL JUEGO

          // -1 GANA EL PC

          if (result != 0) {
            result > 0 ? this.marcador.puntuaJugador() : this.marcador.puntuaComputer();
          }

          this.resultado = result;

          localStorage.removeItem("selected");

          localStorage.setItem("jugador", this.marcador.jugador.toString());
          localStorage.setItem("computer", this.marcador.computer.toString());

          this.selected = false;
          this.decorateSelectedPlay(-2);
      }

  }

  resetScores() {

    this.resultado = -2;

    let img_computer = document.getElementById("computerPlay");

    if (img_computer) {
      img_computer.setAttribute("src", `assets/imagenes/questionmark.png`);
    }

    this.marcador.reset();

    localStorage.setItem("jugador", this.marcador.jugador.toString());
    localStorage.setItem("computer", this.marcador.computer.toString());

  }
}
