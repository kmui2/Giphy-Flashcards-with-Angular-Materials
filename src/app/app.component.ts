import { Component, Optional, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { OverlayContainer } from '@angular/material';
import { Http, Response } from '@angular/http';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  flashcards: FirebaseListObservable<any[]>;

  constructor(
    private db: AngularFireDatabase,
    private http: Http
  ) {
  }

  ngOnInit() {
    this.flashcards = this.db.list('/flashcards');
  }


}
