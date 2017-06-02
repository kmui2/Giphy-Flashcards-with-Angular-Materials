import { Component, OnInit, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { OverlayContainer } from '@angular/material';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { GiphyService } from '../../services/giphy/giphy.service';
import { FirebaseFlashcardService } from '../../services/firebase-flashcard/firebase-flashcard.service';
@Component({
  selector: 'app-add-flashcard',
  templateUrl: 'add-flashcard.component.html',
})
export class AddFlashcardComponent implements OnInit {
  lastDialogResult: string;
  translation: string = "";
  word: string = "";
  flashcard: any;
  

  constructor(
    private _dialog: MdDialog, 
    private _snackBar: MdSnackBar, 
    private _overlayContainer: OverlayContainer,
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private giphyService: GiphyService,
    private firebaseFlashcardService: FirebaseFlashcardService
  ) {
    
  }
  
  ngOnInit () {
    // this.openDialog();
    // console.log(this.route)
    
  }

  openDialog() {
    let dialogRef = this._dialog.open(AddFlashcardDialogContent);

    dialogRef.afterClosed().subscribe((flashcard) => {
      if (!flashcard || !flashcard.translation || !flashcard.word || 
        flashcard.translation == "" || flashcard.word == "") {
        return;
      }
      this.giphyService.performSearch(flashcard.translation)
        .subscribe((res: Response) => {
          var giphies = res.json().data; 
          var selectedGifUrl = giphies[Math.floor(Math.random() * giphies.length)].images.original.url;
          
          flashcard.gifUrl = selectedGifUrl;
          this.firebaseFlashcardService.addFlashcard(flashcard); 
        });
    })
  }
}

// second Component 

@Component({
  templateUrl: 'add-flashcard-dialog.html',
  styleUrls: ['add-flashcard-dialog.css']
})
export class AddFlashcardDialogContent {
  translation: string = "";
  word: string = ""; 
  constructor( @Optional() public dialogRef: MdDialogRef<AddFlashcardDialogContent>) { }
}