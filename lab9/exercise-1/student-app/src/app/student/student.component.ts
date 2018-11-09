import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  title: string;
  myStudent: string;

  constructor() {
    this.title = 'List of GBC Students';
    this.myStudent = 'Ana Roldugina';
   }

  ngOnInit() {
  }

}
