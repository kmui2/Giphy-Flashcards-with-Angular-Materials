import {Component} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'material2-app-app',
  templateUrl: 'material2-app.component.html',
  styleUrls: ['material2-app.component.css'],
})
export class Material2AppAppComponent {
  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];

  progress: number = 0;

  constructor() {
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }
}
