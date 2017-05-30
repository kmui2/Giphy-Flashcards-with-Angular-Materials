import { Component, OnInit, Optional } from '@angular/core';

import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { OverlayContainer } from '@angular/material';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-add-flashcard',
  templateUrl: 'add-flashcard.component.html',
})
export class AddFlashcardComponent implements OnInit {
  lastDialogResult: string;
  translation: string = "";
  word: string = "";
  

  constructor(
    private _dialog: MdDialog, 
    private _snackBar: MdSnackBar, 
    private _overlayContainer: OverlayContainer,
    private db: AngularFireDatabase,
  ) {
    
  }
  
  ngOnInit () {
    
  }

  openDialog() {
    let dialogRef = this._dialog.open(AddFlashcardDialogContent);

    dialogRef.afterClosed().subscribe((flashcard) => {
      const flashcards = this.db.list('/flashcards');
      console.log({ word: flashcard.word, translation: flashcard.translation });
      flashcards.push({ word: flashcard.word, translation: flashcard.translation });
    })
  }
}

// second Component 

@Component({
  templateUrl: 'add-flashcard-dialog.html',
})
export class AddFlashcardDialogContent {
  translation: string = "";
  word: string = "";
  flashcard: any = { word: "", translation: ""};
  constructor( @Optional() public dialogRef: MdDialogRef<AddFlashcardDialogContent>) { }
}