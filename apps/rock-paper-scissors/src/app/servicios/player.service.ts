import { Injectable } from '@angular/core';
import { Player } from './tipos';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private players: Map<string, [Player, number]>;

  constructor() {

      this.players = new Map<string, [Player, number]>();

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

}
