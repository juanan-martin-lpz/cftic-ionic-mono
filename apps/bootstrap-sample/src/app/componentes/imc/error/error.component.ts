import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'angular-repo-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  @Input()
  public errMessage: string;

  constructor() {
    this.errMessage = '';
  }

  ngOnInit(): void {}
}
