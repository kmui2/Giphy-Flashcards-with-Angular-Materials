import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseFlashcardService {
  constructor(
  private db: AngularFireDatabase,
) {  }

  addFlashcard(flashcard) {
    const flashcards = this.db.list('/flashcards');
    // console.log({ word: flashcard.word, translation: flashcard.translation });
    flashcards.push(flashcard);
  }
  
  deleteFlashcard(flashcard) {
    const flashcards = this.db.list('/flashcards');
    // console.log(flashcard.$key);
    flashcards.remove(flashcard.$key);
  }
  
  editFlashcard(flashcard) {
    const flashcards = this.db.list('/flashcards');
    flashcards.update(flashcard.$key, flashcard);  
  }
}