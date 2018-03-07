import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';
import * as $ from 'jquery';
declare var ga: Function;

@Component({
  selector: 'app-etablissementsspecialises',
  templateUrl: './etablissementsspecialises.component.html',
  styleUrls: ['./etablissementsspecialises.component.css']
})
export class EtablissementsspecialisesComponent implements OnInit {

  page = 'etablissementsspecialises';
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
