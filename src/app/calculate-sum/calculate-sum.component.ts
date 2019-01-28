import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate-sum',
  templateUrl: './calculate-sum.component.html',
  styleUrls: ['./calculate-sum.component.css']
})
export class CalculateSumComponent implements OnInit {

  constructor() { }

  input1: number;
  input2: number;
  output: number;

  ngOnInit() {
    this.output = 0;
  }

  calculateSum() {
    this.output = +this.input1 + +this.input2;
  }

}
