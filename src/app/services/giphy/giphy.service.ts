import { Injectable } from '@angular/core';

import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { OverlayContainer } from '@angular/material';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GiphyService {
  
  constructor(
    private db: AngularFireDatabase,
    private http: Http,
    private route: ActivatedRoute,
    private router: Router
  ) { 
  } 
  
  
  performTranslationSearch(flashcard): Observable<any> {
    var apiLink = 'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + flashcard.translation;
    return this.http.get(apiLink);
  }
  performSearch(translation): Observable<any> {
    var apiLink = 'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + translation;
    return this.http.get(apiLink);
  }
}

interface Flashcard{
  $key?:string;
  word?:string;
  translation?:string;
  image?:string;
}