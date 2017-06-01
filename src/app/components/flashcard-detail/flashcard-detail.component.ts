import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';

import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { OverlayContainer } from '@angular/material';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { GiphyService } from '../../services/giphy/giphy.service'; 
@Component({
  selector: 'app-flashcard-detail',
  templateUrl: 'flashcard-detail.component.html',
  styleUrls: ['flashcard-detail.component.css']
})
export class FlashcardDetailComponent implements OnInit {
  @Input() flashcard;
  
  giphies = [];
  selectedGif: any;
  constructor(
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router,
    private giphyService: GiphyService
  ) { 
  } 

  ngOnInit() {
    // this.performTranslationSearch();
    this.giphyService.performTranslationSearch(this.flashcard)
      .subscribe((res: Response) => {
        var giphies = res.json().data; 
        this.selectedGif = giphies[Math.floor(Math.random() * giphies.length)];
        
      });
  }
} 