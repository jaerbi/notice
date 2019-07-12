import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';

import { FormsModule } from "@angular/forms";

var firebaseConfig = {
  apiKey: "AIzaSyBMwqVBig_Kyj_h77wFUBplsHP_4zJK4oM",
  authDomain: "jaerbinote.firebaseapp.com",
  databaseURL: "https://jaerbinote.firebaseio.com",
  projectId: "jaerbinote",
  storageBucket: "jaerbinote.appspot.com",
  messagingSenderId: "709142590499"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
