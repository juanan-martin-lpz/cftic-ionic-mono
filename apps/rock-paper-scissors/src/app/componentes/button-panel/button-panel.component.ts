import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { PlayerService } from '../../servicios/player.service';

@Component({
  selector: 'rps-button-panel',
  templateUrl: './button-panel.component.html',
  styleUrls: ['./button-panel.component.css']
})
export class ButtonPanelComponent implements OnInit {

  private selected!: number;

  @ViewChildren('boton') botones!: QueryList<ElementRef>;


  constructor(private playerSer: PlayerService) {

    this.playerSer.addPlayer("human");

  }

  ngOnInit(): void {
  }

  selectPlay(val: number) {


    this.selected = val;

    // Decorar el boton en el UI

    this.botones.forEach((el: ElementRef) => {

      if (el.nativeElement.id == val.toString()) {
        el.nativeElement.setAttribute("class", "boton isActive");
      }
      else {
        el.nativeElement.setAttribute("class", "boton");
      }
    });
  }
}
