
export interface IMarcador {
  jugador: number;
  computer: number;
}
export class Marcador implements IMarcador {
  public jugador: number;
  public computer: number;

  constructor(marcador?: IMarcador) {
    if (marcador) {
      this.jugador = marcador.jugador;
      this.computer = marcador.computer;
    }
    else {
      this.jugador = 0;
      this.computer = 0;
    }
  }

  reset(): void {
    this.jugador = 0;
    this.computer = 0;
  }

  puntuaJugador(): void {
    this.jugador += 1;
  }

  puntuaComputer(): void {
    this.computer += 1;
  }

}
