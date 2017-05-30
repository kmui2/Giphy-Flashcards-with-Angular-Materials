import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DemoComponent, DemoDialogContent } from './components/demo/demo.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';

export const environment = {
  production: false,
  firebase:{
      apiKey: "AIzaSyAKue96FibAqWFcQ53_Ya8neqOSmZu4K7E",
      authDomain: "proplistings-5dcf0.firebaseapp.com",
      databaseURL: "https://proplistings-5dcf0.firebaseio.com",
      projectId: "proplistings-5dcf0",
      storageBucket: "proplistings-5dcf0.appspot.com",
      messagingSenderId: "1078585714037"
    }
  };
  
  
@NgModule({
  declarations: [
    AppComponent,
    DemoDialogContent,
    DemoComponent,
    FlashcardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  entryComponents: [DemoDialogContent],
  bootstrap: [AppComponent]
})
export class AppModule {}
