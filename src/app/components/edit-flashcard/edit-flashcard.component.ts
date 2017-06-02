import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';

import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { OverlayContainer } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseFlashcardService } from '../../services/firebase-flashcard/firebase-flashcard.service' 
import { GiphyService} from '../../services/giphy/giphy.service';
@Component({
  selector: 'app-edit-flashcard',
  templateUrl: 'edit-flashcard.component.html',
  styleUrls: ['edit-flashcard.component.css']
})
export class EditFlashcardComponent implements OnInit {
  id: string;
  flip: string = 'inactive';
  flashcard: any;
  word: string = "";
  translation: string ="";
  
  constructor(
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router,
    private firebaseFlashcardService: FirebaseFlashcardService,
    private giphyService: GiphyService
  ) {  

  }
  
  

  ngOnInit() {
    this.route.params.subscribe(params => { 
      this.id = params['id'];
      this.db.object('/flashcards/'+this.id).subscribe(flashcard => {
        this.flashcard = flashcard;
        // console.log(this.flashcard);
    });
  }); 
  } 
  
  deleteFlashcard() {
    // console.log(this.flashcard.$key);
    this.firebaseFlashcardService.deleteFlashcard(this.flashcard);
  }
  
  editFlashcard() {
    this.giphyService.performSearch(this.flashcard.translation).subscribe(
      (res: Response) => {
        let giphies = res.json().data; 
        let selectedGifUrl = giphies[Math.floor(Math.random() * giphies.length)].images.original.url;
        this.flashcard.gifUrl = selectedGifUrl;
        console.log(this.flashcard);
        this.firebaseFlashcardService.editFlashcard(this.flashcard);
      }
    )
  }
}