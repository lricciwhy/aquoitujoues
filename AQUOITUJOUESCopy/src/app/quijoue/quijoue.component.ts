import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import * as $ from 'jquery';
declare var ga: Function;

@Component({
  selector: 'app-quijoue',
  templateUrl: './quijoue.component.html',
  styleUrls: ['./quijoue.component.css']
})
export class QuijoueComponent implements OnInit {

  constructor() { }

  page = 'quijoue';
  @Input() cards: any;
  @Output() emitted = new EventEmitter<string>();

  ngOnInit() {
    const scope = this;
    for (let j = 0; j < this.cards.length; j++) {
      $('app-' + scope.page + ' .' + this.cards[j].class).click(function() {
        scope.emitted.emit(scope.cards[j].class);
      });
    }
  }

}
