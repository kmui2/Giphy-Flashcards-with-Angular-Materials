import { Component, Optional, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { OverlayContainer } from '@angular/material';
import { Http, Response } from '@angular/http';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  flashcards: FirebaseListObservable<any[]>;

  constructor(
    private db: AngularFireDatabase,
    private http: Http,
    private _dialog: MdDialog, 
    private _snackBar: MdSnackBar, 
  ) {
  }

  ngOnInit() {
    this.flashcards = this.db.list('/flashcards');
  }

}