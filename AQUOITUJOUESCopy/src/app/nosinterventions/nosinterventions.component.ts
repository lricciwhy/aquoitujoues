import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import * as $ from 'jquery';
declare var ga: Function;

@Component({
  selector: 'app-nosinterventions',
  templateUrl: './nosinterventions.component.html',
  styleUrls: ['./nosinterventions.component.css']
})
export class NosinterventionsComponent implements OnInit {

  page = 'nosinterventions';
  @Input() cards: any;
  @Output() emitted = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    const scope = this;
    for (let j = 0; j < this.cards.length; j++) {
      $('app-' + scope.page + ' .' + this.cards[j].class).click(function() {
        scope.emitted.emit(scope.cards[j].class);
      });
    }
  }

}
