import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var ga: Function;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  lastColor = '4292c4';
  firstColor = '34a07a';
  cardsToInit = [
    {
      title: 'Présentation',
      backgroundImage: 'url(../assets/symboles/maison.png)',
      class: 'presentation'
    }, {
      title: 'Qui joue ?',
      backgroundImage: 'url(../assets/symboles/main.png)',
      class: 'quijoue'
    }, {
      title: 'Nos interventions',
      backgroundImage: 'url(../assets/symboles/epee.png)',
      class: 'nosinterventions'
    }, {
      title: 'Entreprises',
      subCategory: true,
      backgroundImage: 'url(../assets/symboles/hotel.png)',
      class: 'entreprises'
    }, {
      title: 'Établissements spécialisés',
      subCategory: true,
      backgroundImage: 'url(../assets/symboles/maison.png)',
      class: 'etablissementsspecialises'
    }, {
      title: 'Bars',
      subCategory: true,
      backgroundImage: 'url(../assets/symboles/coupe.png)',
      class: 'bars'
    }, {
      title: 'Particuliers',
      subCategory: true,
      backgroundImage: 'url(../assets/symboles/meeple.png)',
      class: 'particuliers'
    }, {
      title: 'Nos Jeux',
      backgroundImage: 'url(../assets/symboles/puzzle.png)',
      class: 'nosjeux'
    }, {
      title: 'Contact',
      backgroundImage: 'url(../assets/symboles/crayon.png)',
      class: 'contact'
    }, {
      title: 'Mentions légales',
      subCategory: true,
      topInit: 1000,
      backgroundImage: 'url(../assets/symboles/crayon.png)',
      class: 'mentionslegales'
    }, {
      title: 'DB Access',
      subCategory: true,
      topInit: 1000,
      backgroundImage: 'url(../assets/symboles/crayon.png)',
      class: 'dbaccess'
    }
  ];

  ngOnInit() {
    // this.callGA('test');
  }


  callGA(data: string) {
    ga('set', 'page',  data );
    ga('send', 'pageview');

  }

}
