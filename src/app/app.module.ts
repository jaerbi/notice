import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';

import { FormsModule } from "@angular/forms";

var firebaseConfig = {
  apiKey: "AIzaSyB8Nf9IAHYXWbQXcmUAd0sg6UTXt8S5HLI",
  authDomain: "todo-jaerbi.firebaseapp.com",
  databaseURL: "https://todo-jaerbi.firebaseio.com",
  projectId: "todo-jaerbi",
  storageBucket: "todo-jaerbi.appspot.com",
  messagingSenderId: "189381062081"
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
