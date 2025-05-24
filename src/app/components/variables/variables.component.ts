import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.css'
})
export class VariablesComponent {

  firstName : string = "Praveen";
  lastName : string = "";
  courseName: string;
  rollNo : number;
  currentDate : Date = new Date();
  isActive : boolean=true;
  student : any;


  constructor(){
    this.courseName= "Angular 19";
    this.rollNo = 123;
this.student= "A";
this.student=1234;

  }

}
