import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  template: '<h2>{{ getTitle() }}</h2><br><h3>{{getCurrentDate()}}</h3>'
})
export class StudentsComponent {
  title = 'My List of Students';

  getTitle() {
    return this.title;
  }

  getCurrentDate() {

    return new Date();
  }
}
