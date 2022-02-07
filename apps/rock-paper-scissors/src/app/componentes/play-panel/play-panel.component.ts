import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../servicios/player.service';

@Component({
  selector: 'rps-play-panel',
  templateUrl: './play-panel.component.html',
  styleUrls: ['./play-panel.component.css']
})
export class PlayPanelComponent implements OnInit {

  constructor(private playService: PlayerService) { }

  ngOnInit(): void {
  }

  play(): void  {
    this.playService.resolve();

  }

}
