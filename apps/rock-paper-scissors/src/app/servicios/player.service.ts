import { Injectable } from '@angular/core';
import { Player } from './tipos';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {


  private players: Map<string, [Player, number]>;

  private computerPlay: number;

  private tabla_decision = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0]
  ];

  constructor() {

      this.players = new Map<string, [Player, number]>();
      this.computerPlay = -2;
  }

  addPlayer(name: string) : void {

    const player = new Player(name, 0);

    this.players.set(name, [player, -1]);

  }

  removePlayer(name: string): void {
    this.players.delete(name);
  }

  setPlayerPlay(name: string, play: number): void {

    const player = this.players.get(name);

    if (player) {

      let [p, _] =  player;

      this.players.set(name, [p, play] );
    }
  }

  resolve() {

    // Obtenemos la jugada de la maquina
    this.generateComputerPlay();
    this.computerPlay = this.getComputerPlay();

    // Obtenemos un Map
    const resultados = this.players.forEach((player) => {
      const [p, play] = player;

      const result = this.tabla_decision[play][this.computerPlay];

      console.log(result);

      return {p, play, result};

    });

    console.log(resultados);
  }

  resolve_rec(resultados: any) {

  }

  generateComputerPlay() {
    this.computerPlay = Math.floor(Math.random() * 3);
  }

  getComputerPlay(): number {
    return this.computerPlay;
  }
}
