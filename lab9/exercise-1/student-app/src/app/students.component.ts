import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html'
})
export class StudentsComponent {
  title = 'My List of Students';
  students = ['Robin Scherbatsky', 'Barney Stinson', 'Ted Mosby'];
  myStudent = this.students[0];

  getTitle() {
    return this.title;
  }

  getCurrentDate() {

    return new Date();
  }
}
