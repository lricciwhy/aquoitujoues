import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  @Input() lastColor;
  @Input() firstColor;
  display = '';

  @Input() cardsToInit;

  constructor() { }

  ngOnInit() {
    $('.mobile .footer').css('background', '#' + this.lastColor);
    $('.mobile .title').css('background', '#' + this.lastColor);
    const scope = this;
    for (let j = 0; j < this.cardsToInit.length; j++) {
      $('.footer .' + this.cardsToInit[j].class).click(function() {
        scope.emitted(scope.cardsToInit[j].class);
      });
    }
  }

  emitted(name: string) {
    this.display = name;
  }

}
