import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
courseName : string = "Angular 19";
courseDuration: string = " 3 Hrs";
myPlaceHolderText = "Enter Course Name";
clsName = "bg-success";
showWelcomeText (){
  alert("Welcome to Angular 19")
}
showMessage(msg : string){
  debugger;
  alert(msg)
}
onStageChange(){
  alert("State Got Changed")
}
}
