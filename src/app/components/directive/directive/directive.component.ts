import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = false;

  num1: number = 0;
  num2: number = 0;

  selectedCaste: string='';

  hideDiv1() {
    this.isDiv1Visible = false;
  }

  showDiv1() {
    this.isDiv1Visible = true;
  }

  hideShowDiv2(isDisplay: boolean) {
    this.isDiv2Visible = isDisplay;
  }
}
