import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';

import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { OverlayContainer } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-edit-flashcard',
  templateUrl: 'edit-flashcard.component.html',
  styleUrls: ['edit-flashcard.component.css']
})
export class EditFlashcardComponent implements OnInit {
  id: string;
  flip: string = 'inactive';
  flashcard: any;
  
  constructor(
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router
  ) {  

  }
  
  

  ngOnInit() {
    this.route.params.subscribe(params => { 
      this.id = params['id'];
      this.db.object('/flashcards/'+this.id).subscribe(flashcard => {
        this.flashcard = flashcard;
        console.log(this.flashcard);
    });
  }); 
  } 
}