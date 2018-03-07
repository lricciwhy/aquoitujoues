import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-dbaccess',
  templateUrl: './dbaccess.component.html',
  styleUrls: ['./dbaccess.component.css']
})
export class DbaccessComponent implements OnInit {

  nom: string;
  genre: string;
  duree: string;
  agemin: string;
  nbjoueurmin: string;
  nbjoueurmax: string;

  jeux: FirebaseListObservable<string[]> ;
  constructor(
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.jeux = this.db.list('/jeux');
  }

  addAGame() {
    this.jeux.push({
      nom: this.nom,
      genre: this.genre,
      duree: this.duree,
      agemin: this.agemin,
      nbjoueurmin: this.nbjoueurmin,
      nbjoueurmax: this.nbjoueurmax
    });
  }
}
