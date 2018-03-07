import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import * as $ from 'jquery';
declare var ga: Function;

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  constructor() { }

  folder = 'jeux';
  page = 'presentation';
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
