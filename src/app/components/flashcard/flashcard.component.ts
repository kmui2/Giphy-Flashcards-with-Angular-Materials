import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';

import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { OverlayContainer } from '@angular/material';
import { Http, Response } from '@angular/http';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

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
    private http: Http
  ) {
  }


  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  ngOnInit() {
    this.performTranslationSearch();
  }

  performTranslationSearch(): void {
    var apiLink = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + this.flashcard.translation;
    this.http.request(apiLink)
      .subscribe((res: Response) => {
        this.giphies = res.json().data;
        console.log(this.giphies);
        this.selectedGif = this.giphies[Math.floor(Math.random() * this.giphies.length)];
        console.log("This is selected: " + this.selectedGif);
        return this.selectedGif.images.original.url;
      });
  }
}