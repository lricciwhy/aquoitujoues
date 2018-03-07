import { AfterViewInit, Component, OnInit, Input} from '@angular/core';
import * as $ from 'jquery';
declare var ga: Function;

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit, AfterViewInit {
  @Input() lastColor;
  @Input() firstColor;
  transitionEffect = 'linear';
  transitionSpeedIn = 400;
  transitionSpeedOut = 400;
  smallCard = {
    width: 250,
    height: 400
  };
  bigCard = {
    rotation: 180,
    pos: {
      X: -140,
      Y: 0
    },
    width: 600,
    height: 1000
  };

  opened = -1;
  handOpened: Boolean = true;

  @Input() cardsToInit;
  cards = [];


  emitted(buttonName: string) {
    this.clickCard(buttonName);
  }

  ngOnInit() {
    // init the color
    $('.desktop .footer').css('background', '#' + this.firstColor);
    $('.desktop .title').css('background', '#' + this.lastColor);

    // Init the cards
    let index = 0;
    for (let i = 0; i < this.cardsToInit.length; i++) {
      const myCard = JSON.parse(JSON.stringify(this.cardsToInit[i]));
      if (!myCard.subCategory) {
        index++;
      }
      const j =  1 + index - Math.trunc(this.cardsToInit.length / 2);
      const color = this.regleOfThreeForcolor(this.lastColor, this.firstColor, 100 * ( index - 1  ) / ( 4  ) );
      const topTas = myCard.subCategory ? (myCard.topInit ? myCard.topInit : -500) : - 50 * j + 150;
      const topHand = myCard.subCategory ? (myCard.topInit ? myCard.topInit : -500) : 100 / 16 * j * j - 20 * j + 230;
      this.cards.push({
        title: myCard.title,
        subCategory: myCard.subCategory,
        background: '#' + color,
        backgroundImage: myCard.backgroundImage,
        class: myCard.class,
        tas : {
          left: 600,
          top:  topTas,
          rotate: -2 * j
        },
        hand: {
          left: 80 * j + 250,
          top: topHand,
          rotate: 10 * j + 20
        }
      });
    }
    const scope = this;
    for (let j = 0; j < this.cards.length; j++) {
      $('.footer .' + this.cards[j].class).click(function() {
        scope.emitted(scope.cards[j].class);
      });
    }

  }

  ngAfterViewInit() {
    const route = window.location.pathname.substring(1);
    const idToShow = this.getIdFromClass('dbaccess') || -1;
    for (let j = 0; j < this.cards.length; j++) {
        this.displayCardToHand(j);
    }
    this.clickCard(route);
  }

  displayCard(i: number) {

    const scope = this;
    const cardName: string = 'card' + i;
    const top: number = this.cards[i].tas.top;
    const left: number = this.cards[i].tas.left;
    const rotate: number = this.cards[i].tas.rotate;
    const handTop: number = this.cards[i].hand.top;
    const handLeft: number = this.cards[i].hand.left;
    const handRotate: number = this.cards[i].hand.rotate;
    const bigCard = this.bigCard;
    const smallCard = this.smallCard;

    $('#' + cardName).css('max-height', '');
    $('#' + cardName).css('max-width', '');
    $('#' + cardName).css('borderSpacing', 0);
    $('#' + cardName).animate({  borderSpacing: 100 }, {
      step: function(percent, fx) {
        if (percent > 50) { $('#' + cardName).addClass('flipped'); }
        const nowW = scope.regleOfThree(smallCard.width, bigCard.width, percent);
        const nowH = scope.regleOfThree(smallCard.height, bigCard.height, percent);
        const nowX = scope.regleOfThree(left, bigCard.pos.X, percent);
        const nowY = scope.regleOfThree(top, bigCard.pos.Y, percent);
        const nowDeg = scope.regleOfThree(rotate, bigCard.rotation, percent);
        const nowFlip = 90 - Math.abs(scope.regleOfThree(0, 180, percent) - 90 ) ;
        $(this).css('transform', 'rotateY(' + nowFlip + 'deg) rotate(' + nowDeg + 'deg)');
        $(this).css('left', nowX + 'px');
        $(this).css('top', nowY + 'px');
        $(this).css('width', nowW + 'px');
        $(this).css('height',  nowH + 'px');
      },
      duration: scope.transitionSpeedIn
    }, scope.transitionEffect);
  }
  storeCard(i: number) {

    const scope = this;
    const cardName: string = 'card' + i;
    const top: number = this.cards[i].tas.top;
    const left: number = this.cards[i].tas.left;
    const rotate: number = this.cards[i].tas.rotate;
    const handTop: number = this.cards[i].hand.top;
    const handLeft: number = this.cards[i].hand.left;
    const handRotate: number = this.cards[i].hand.rotate;
    const bigCard = this.bigCard;
    const smallCard = this.smallCard;

    $('#' + cardName).css('max-height', '');
    $('#' + cardName).css('max-width', '');
    $('#' + cardName).css('borderSpacing', 0);
    $('#' + cardName).animate({  borderSpacing: 100 }, {
      step: function(percent, fx) {
        if (percent > 50) { $('#' + cardName).removeClass('flipped'); }
        const nowW = scope.regleOfThree(bigCard.width, smallCard.width, percent);
        const nowH = scope.regleOfThree(bigCard.height, smallCard.height, percent);
        const nowX = scope.regleOfThree(bigCard.pos.X, left, percent);
        const nowY = scope.regleOfThree(bigCard.pos.Y, top, percent);
        const nowDeg = scope.regleOfThree(bigCard.rotation, rotate, percent);
        const nowFlip = 90 - Math.abs(scope.regleOfThree(0, 180, percent) - 90 ) ;
        $(this).css('transform', 'rotateY(' + nowFlip + 'deg) rotate(' + nowDeg + 'deg)');
        $(this).css('left', nowX + 'px');
        $(this).css('top', nowY + 'px');
        $(this).css('width', nowW + 'px');
        $(this).css('height',  nowH + 'px');
      },
      duration: scope.transitionSpeedOut
    }, scope.transitionEffect);

  }
  displayCardToHand(i: number) {

    const scope = this;
    const cardName: string = 'card' + i;
    const top: number = this.cards[i].tas.top;
    const left: number = this.cards[i].tas.left;
    const rotate: number = this.cards[i].tas.rotate;
    const handTop: number = this.cards[i].hand.top;
    const handLeft: number = this.cards[i].hand.left;
    const handRotate: number = this.cards[i].hand.rotate;
    const bigCard = this.bigCard;
    const smallCard = this.smallCard;

    $('#' + cardName).css('max-height', '');
    $('#' + cardName).css('max-width', '');
    $('#' + cardName).css('borderSpacing', 0);
    $('#' + cardName).animate({  borderSpacing: 100 }, {
      step: function(percent, fx) {
        const nowX = scope.regleOfThree(left, handLeft, percent);
        const nowW = scope.regleOfThree(smallCard.width, smallCard.width, percent);
        const nowH = scope.regleOfThree(smallCard.height, smallCard.height, percent);
        const nowY = scope.regleOfThree(top, handTop, percent);
        const nowDeg = scope.regleOfThree(rotate, handRotate, percent);
        $(this).css('transform', 'rotate(' + nowDeg + 'deg)');
        $(this).css('left', nowX + 'px');
        $(this).css('top', nowY + 'px');
        $(this).css('width', nowW + 'px');
        $(this).css('height',  nowH + 'px');
      },
      duration: scope.transitionSpeedIn
    }, scope.transitionEffect);
  }
  storeCardFromHand(i: number) {

    const scope = this;
    const cardName: string = 'card' + i;
    const top: number = this.cards[i].tas.top;
    const left: number = this.cards[i].tas.left;
    const rotate: number = this.cards[i].tas.rotate;
    const handTop: number = this.cards[i].hand.top;
    const handLeft: number = this.cards[i].hand.left;
    const handRotate: number = this.cards[i].hand.rotate;
    const bigCard = this.bigCard;
    const smallCard = this.smallCard;

    $('#' + cardName).css('max-height', '');
    $('#' + cardName).css('max-width', '');
    $('#' + cardName).css('borderSpacing', 0);
    $('#' + cardName).animate({  borderSpacing: 100 }, {
      step: function(percent, fx) {
        const nowX = scope.regleOfThree(handLeft, left, percent);
        const nowW = scope.regleOfThree(smallCard.width, smallCard.width, percent);
        const nowH = scope.regleOfThree(smallCard.height, smallCard.height, percent);
        const nowY = scope.regleOfThree(handTop, top, percent);
        const nowDeg = scope.regleOfThree(handRotate, rotate, percent);
        $(this).css('transform', 'rotate(' + nowDeg + 'deg)');
        $(this).css('left', nowX + 'px');
        $(this).css('top', nowY + 'px');
        $(this).css('width', nowW + 'px');
        $(this).css('height',  nowH + 'px');
      },
      duration: scope.transitionSpeedOut
    }, scope.transitionEffect);
  }
  displayCardFromHand(i: number) {

    const scope = this;
    const cardName: string = 'card' + i;
    const top: number = this.cards[i].tas.top;
    const left: number = this.cards[i].tas.left;
    const rotate: number = this.cards[i].tas.rotate;
    const handTop: number = this.cards[i].hand.top;
    const handLeft: number = this.cards[i].hand.left;
    const handRotate: number = this.cards[i].hand.rotate;
    const bigCard = this.bigCard;
    const smallCard = this.smallCard;
    const height: number = smallCard.height;

    $('#' + cardName).css('max-height', '100%');
    $('#' + cardName).css('max-width', '');
    $('#' + cardName).css('borderSpacing', 0);
    $('#' + cardName).animate({  borderSpacing: 100 }, {
      step: function(percent, fx) {
        if (percent > 50) { $('#' + cardName).addClass('flipped'); }
        const nowX = scope.regleOfThree(handLeft, bigCard.pos.X, percent);
        const nowY = scope.regleOfThree(handTop, bigCard.pos.Y, percent);
        const nowW = scope.regleOfThree(smallCard.width, bigCard.width, percent);
        const nowH = scope.regleOfThree(smallCard.height, bigCard.height, percent);
        const nowDeg = scope.regleOfThree(handRotate, bigCard.rotation, percent);
        const nowB = scope.regleOfThree(height, 100, percent);
        const nowFlip = 90 - Math.abs(scope.regleOfThree(0, 180, percent) - 90 ) ;
        $(this).css('transform', ' rotateY(' + nowFlip + 'deg) rotate(' + nowDeg + 'deg)');
        $(this).css('left', nowX + 'px');
        $(this).css('top', nowY + 'px');
        $(this).css('width', nowW + 'px');
        $(this).css('height',  nowH + 'px');
      },
      duration: scope.transitionSpeedIn
    }, scope.transitionEffect);

  }
  storeCardToHand(i: number) {

    const scope = this;
    const cardName: string = 'card' + i;
    const top: number = this.cards[i].tas.top;
    const left: number = this.cards[i].tas.left;
    const rotate: number = this.cards[i].tas.rotate;
    const handTop: number = this.cards[i].hand.top;
    const handLeft: number = this.cards[i].hand.left;
    const handRotate: number = this.cards[i].hand.rotate;
    const bigCard = this.bigCard;
    const smallCard = this.smallCard;

    $('#' + cardName).css('max-height', '');
    $('#' + cardName).css('max-width', '');
    $('#' + cardName).css('borderSpacing', 0);
    $('#' + cardName).animate({  borderSpacing: 100 }, {
      step: function(percent, fx) {
        if (percent > 50) { $('#' + cardName).removeClass('flipped'); }
        const nowX = scope.regleOfThree(bigCard.pos.X, handLeft, percent);
        const nowY = scope.regleOfThree(bigCard.pos.Y, handTop, percent);
        const nowW = scope.regleOfThree(bigCard.width, smallCard.width, percent);
        const nowH = scope.regleOfThree(bigCard.height, smallCard.height, percent);
        const nowDeg = scope.regleOfThree(bigCard.rotation, handRotate, percent);
        const nowFlip = 90 - Math.abs(scope.regleOfThree(0, 180, percent) - 90 ) ;
        $(this).css('transform', 'rotateY(' + nowFlip + 'deg) rotate(' + nowDeg + 'deg)');
        $(this).css('left', nowX + 'px');
        $(this).css('top', nowY + 'px');
        $(this).css('width', nowW + 'px');
        $(this).css('height',  nowH + 'px');
      },
      duration: scope.transitionSpeedOut
    }, scope.transitionEffect);

  }

  presentCardInHand(i: number, tX: number, tY: number) {
    const scope = this;
    const cardName: string = 'card' + i;
    const rotate = this.cards[i].hand.rotate;
    const fromTY = this.getTranslateY($('#' + cardName));

    $('#' + cardName).css('borderSpacing', 0);
    $('#' + cardName).animate({  borderSpacing: 100 }, {
      step: function(percent, fx) {
        const nowTY = scope.regleOfThree(fromTY, tY, percent);
        $(this).css('transform', ' rotate(' + rotate + 'deg) translateY(' + nowTY + 'px)' );
      },
      duration: 100
    }, scope.transitionEffect);
  }

  getIdFromClass(myClass: string) {
    for (let i = 0; i < this.cardsToInit.length; i++) {
      if (this.cardsToInit[i].class === myClass) {
        return i;
      }
    }
    return -1;
  }

  clickCard(myClass: string): void {

    ga('set', 'page', '/' + myClass + '.html');
    ga('send', 'pageview');

    const i = this.getIdFromClass(myClass);
    if (i === -1) {
      return null;
    }

    // init value of the clicked card
    const cardName: string = 'card' + i;

    // If the hand is opened, close the other cards
    if (this.handOpened) {
      for (let j = 0; j < this.cards.length; j++) {
        if (j !== i) {
          this.storeCardFromHand(j);
        } else {
          this.displayCardFromHand(j);
        }
      }
      this.handOpened = false;
      this.opened = i;
    } else {
      // If the hand is not opened, ie one Card is selected
      // and the clicked is not the one already selected
      // we want to select it, and unselect the previously selected
      if (i !== this.opened) {
        if (this.opened !== -1 ) { this.storeCard(this.opened); }
        this.displayCard(i);
        this.opened = i;
      } else {
        // If the hand is not opened, ie one Card is selected
        // and the clicked is this one
        // we want to reopen the hand
        // all from the pile but the selected, from the display
        for (let j = 0; j < this.cards.length; j++) {
          if (j !== i) {
            this.displayCardToHand(j);
          } else {
            this.storeCardToHand(j);
          }
        }
        this.opened = -1;
        this.handOpened = true;
      }
    }

  }

  regleOfThree(valueAtZero: number, valueAtCent: number, x: number) {
    const a = ( valueAtCent - valueAtZero ) / 100;
    const b = valueAtZero;
    return a * x + b;
  }

  regleOfThreeForcolor(firstColor: string, lastColor: string, percent: number) {
    const r1 = parseInt(firstColor.substring(0, 2), 16);
    const g1 = parseInt(firstColor.substring(2, 4), 16);
    const b1 = parseInt(firstColor.substring(4, 6), 16);
    const r2 = parseInt(lastColor.substring(0, 2), 16);
    const g2 = parseInt(lastColor.substring(2, 4), 16);
    const b2 = parseInt(lastColor.substring(4, 6), 16);

    const r = Math.trunc(this.regleOfThree(r1, r2, percent));
    const g = Math.trunc(this.regleOfThree(g1, g2, percent));
    const b = Math.trunc(this.regleOfThree(b1, b2, percent));

    return ('0' + r.toString(16)).slice(-2) + ('0' + g.toString(16)).slice(-2) + ('0' + b.toString(16)).slice(-2);
  }

  getRotationDegrees(obj: any) {
    let angle = 0;
    const matrix = obj.css('-webkit-transform') ||
    obj.css('-moz-transform')    ||
    obj.css('-ms-transform')     ||
    obj.css('-o-transform')      ||
    obj.css('transform');
    if (matrix !== 'none') {
      const values = matrix.split('(')[1].split(')')[0].split(',');
      const a = values[0];
      const b = values[1];
      angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    } else {
      angle = 0; }
    return (angle < 0) ? angle + 360 : angle;
  }

  getTranslateY(obj: any) {
    const matrix = obj.css('-webkit-transform') ||
    obj.css('-moz-transform')    ||
    obj.css('-ms-transform')     ||
    obj.css('-o-transform')      ||
    obj.css('transform');
    if (matrix !== 'none') {
      const values = matrix.split('(')[1].split(')')[0].split(',');
      return parseInt(values[5], 10);
    }
  }

  getDistanceFromCenter(i: number, x: number) {
    const myCard = $('#card' + i);
    const w =  myCard.width();
    const h =  myCard.height();
    const x1 = myCard.offset().left;
    const a1 = Math.atan(w / h);
    const a2 = this.getRotationDegrees(myCard) * 2 * Math.PI / 360;
    const c = Math.sqrt( 62 * 62 + 200 * 200 );
    let x2 = 0;
    if ( a2 > Math.PI) {
      x2 = Math.sin(a1 - a2) * c ;
    } else {
      x2 = Math.sin(a2 + a1) * c ;
    }
    return  x1 + x2 - x;
  }

  applyMovementFunction(x: number) {
    if (Math.abs(x) > 10) {
      return 2500 / x;
    } else {
      return x;
    }
  }

  mouseEnter(i: number) {
    if (this.handOpened && this.opened !== i) {
      this.presentCardInHand(i, 0, -50);
    }
  }

  mouseLeave(i: number) {
    if (this.handOpened && this.opened !== i) {
      this.presentCardInHand(i, 0, 0);
    }
  }


}
