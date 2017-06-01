import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';

import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { OverlayContainer } from '@angular/material';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { GiphyService } from '../../services/giphy/giphy.service';
@Component({
  selector: 'app-flashcard',
  templateUrl: 'flashcard.component.html',
  styleUrls: ['flashcard.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class FlashcardComponent implements OnInit {
  @Input() flashcard;
  flip: string = 'inactive';
  
  giphies = [];
  selectedGif: any;
  constructor(
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router,
    private giphyService: GiphyService
  ) { 
  } 
  
  // goToFlashcard(id: string): void {
  //   this.router.navigate(['./', id], {relativeTo: this.route});
  // }


  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
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