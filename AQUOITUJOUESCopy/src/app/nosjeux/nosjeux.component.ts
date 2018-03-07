import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as $ from 'jquery';
declare var ga: Function;


@Component({
  selector: 'app-nosjeux',
  templateUrl: './nosjeux.component.html',
  styleUrls: ['./nosjeux.component.css']
})
export class NosjeuxComponent implements OnInit {

  jeux;
  folder = 'jeux';
  page = 'nosjeux';

  filterByDuree = '';

  @Input() cards: any;
  @Output() emitted = new EventEmitter<string>();
  constructor(
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    const scope = this;
    for (let j = 0; j < this.cards.length; j++) {
      $('app-' + scope.page + ' .' + this.cards[j].class).click(function() {
        scope.emitted.emit(scope.cards[j].class);
      });
    }
    this.jeux = this.db.list('/jeux');

  }

  camelize(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\W/g, '');
  }

}
