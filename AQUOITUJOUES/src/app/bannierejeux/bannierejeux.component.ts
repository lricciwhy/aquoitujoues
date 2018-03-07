import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-bannierejeux',
  templateUrl: './bannierejeux.component.html',
  styleUrls: ['./bannierejeux.component.css']
})
export class BannierejeuxComponent implements OnInit {

  @Input() extension = '.png';
  @Input() folder: any;
  @Input() page: any;
  constructor() { }

  ngOnInit() {
    const scope = this;
    const n = 4;
    $('.desktop ' + this.page + ' img').each(function(index ) {
      $(this).attr('src', '../../assets/' + scope.folder + '/' + (index % n)  + scope.extension);
    });
  }

}
