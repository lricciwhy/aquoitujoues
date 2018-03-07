import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';

// firebase

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Components
import { ContactComponent } from './contact/contact.component';
import { NosjeuxComponent } from './nosjeux/nosjeux.component';
import { LogoComponent } from './logo/logo.component';
import { PresentationComponent } from './presentation/presentation.component';
import { QuijoueComponent } from './quijoue/quijoue.component';
import { NosinterventionsComponent } from './nosinterventions/nosinterventions.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { EtablissementsspecialisesComponent } from './etablissementsspecialises/etablissementsspecialises.component';
import { BarsComponent } from './bars/bars.component';
import { ParticuliersComponent } from './particuliers/particuliers.component';
import { DesktopComponent } from './desktop/desktop.component';
import { MobileComponent } from './mobile/mobile.component';
import { BannierejeuxComponent } from './bannierejeux/bannierejeux.component';
import { MentionslegalesComponent } from './mentionslegales/mentionslegales.component';
import { DbaccessComponent } from './dbaccess/dbaccess.component';
import { LogodeuxComponent } from './logodeux/logodeux.component';


// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyC0CwLATbGJhXNGVF7M9FaCVOi1lz9QdNE',
  authDomain: 'aquoitujoues-56877.firebaseapp.com',
  databaseURL: 'https://aquoitujoues-56877.firebaseio.com',
  projectId: 'aquoitujoues-56877',
  storageBucket: 'aquoitujoues-56877.appspot.com',
  messagingSenderId: '922625454587'
};


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NosjeuxComponent,
    LogoComponent,
    PresentationComponent,
    QuijoueComponent,
    NosinterventionsComponent,
    EntreprisesComponent,
    EtablissementsspecialisesComponent,
    BarsComponent,
    ParticuliersComponent,
    DesktopComponent,
    MobileComponent,
    BannierejeuxComponent,
    MentionslegalesComponent,
    DbaccessComponent,
    LogodeuxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule,
    HttpModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
