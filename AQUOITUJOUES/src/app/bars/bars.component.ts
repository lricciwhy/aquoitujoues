import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import * as $ from 'jquery';
declare var ga: Function;

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {

  page = 'bars';
  @Input() cards: any;
  @Output() emitted = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    const scope = this;
    for (let j = 0; j < this.cards.length; j++) {
      $('app-' + scope.page + ' .' + this.cards[j].class).click(function() {
        event.stopPropagation();
        scope.emitted.emit(scope.cards[j].class);
      });
    }
  }

}
