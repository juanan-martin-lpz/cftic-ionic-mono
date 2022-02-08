
export class Marcador {
  public jugador: number;
  public computer: number;

  constructor() {
    this.jugador = 0;
    this.computer = 0;
  }

  reset() {
    this.jugador = 0;
    this.computer = 0;
  }

  puntuaJugador() {
    this.jugador += 1;
  }

  puntuaComputer() {
    this.computer += 1;
  }

}
