
export interface IMarcador {
  jugador: number;
  computer: number;

  reset(): void;
  puntuaJugador(): void;
  puntuaComputer(): void;
}
export class Marcador implements IMarcador {
  public jugador: number;
  public computer: number;

  constructor() {
    this.jugador = 0;
    this.computer = 0;
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
