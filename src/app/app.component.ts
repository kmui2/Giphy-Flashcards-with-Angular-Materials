import { Component, Optional } from '@angular/core';

import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { OverlayContainer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkTheme: boolean = false;
  lastDialogResult: string;
  
  foods: any[] = [
    { name: 'Pizza', rating: 'Excellent' },
    { name: 'Burritos', rating: 'Great' },
    { name: 'French fries', rating: 'Pretty good' },
  ];

  progress: number = 0;

  constructor(private _dialog: MdDialog, private _snackBar: MdSnackBar, private _overlayContainer: OverlayContainer) {
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }
  
 toggleTheme(){
   this.isDarkTheme = !this.isDarkTheme;
   
   if (this.isDarkTheme){
      this._overlayContainer.themeClass = 'app-dark-theme';
   } else {
      this._overlayContainer.themeClass = 'default';     
   }
   
 }

  openDialog() {
    let dialogRef = this._dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }

  openSnackBar() {
    this._snackBar.open('YUM SNACKS', 'CHEW', { duration: 3000 });  
  }
}

// second Component 

@Component({
  template: `
    <p>This is a dialog</p>
    <p>
      <label>
        This is a text box inside of a dialog.
        <input #dialogInput>
      </label>
    </p>
    <p> <button md-button (click)="dialogRef.close(dialogInput.value)">CLOSE</button> </p>
  `,
})
export class DialogContent {
  constructor( @Optional() public dialogRef: MdDialogRef<DialogContent>) { }
}
