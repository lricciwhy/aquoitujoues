import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';
import * as $ from 'jquery';
declare var ga: Function;

@Component({
  selector: 'app-particuliers',
  templateUrl: './particuliers.component.html',
  styleUrls: ['./particuliers.component.css']
})
export class ParticuliersComponent implements OnInit {

  page = 'particuliers';
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
