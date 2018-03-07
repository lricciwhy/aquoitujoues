import { PresentationComponent } from './../presentation/presentation.component';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as $ from 'jquery';
declare var ga: Function;
declare var emailjs: any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  constructor(private http: Http) { }
  statusMail = '';
  nom;
  prenom;
  autreValue;
  vousetes;
  email;
  sujet;
  yourMessage;
  selectedValue = 0;
  typeList = [
    {
      value: 0,
      label: 'Un particulier'
    },
    {
      value: 1,
      label: 'Une entreprise'
    },
    {
      value: 2,
      label: 'Un bar'
    },
    {
      value: 3,
      label: 'Un établissement spécialisé'
    },
    {
      value: 4,
      label: 'Autre'
    }
  ];

  ngOnInit() {
    // emailjs.sendForm('default_service', 'mailtomodjo', this); return false;
    const scope = this;
    $('input').change(function() {
      scope.statusMail = '';
    });
    $('#submitMail').click(function() {
      scope.statusMail = 'information';
      emailjs.send('default_service', 'mailtomodjo', {
        vousetes: scope.selectedValue,
        autreValue: scope.autreValue,
        nom: scope.nom,
        prenom: scope.prenom,
        sujet: scope.sujet,
        email: scope.email,
        yourMessage: scope.yourMessage
      })
      .then(
        function(response) {
          scope.statusMail = 'confirmation';
        },
        function(error) {
          scope.statusMail = 'error';
        }
      );
    });


  }



}
