import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  sum1: number;
  sum2: number;
  diff1: number;
  diff2: number;
  prod1: number;
  prod2: number;
  quot1: number;
  quot2: number;

  output: number;
  formula: String;

  showSum: boolean;
  showDiff: boolean;
  showProd: boolean;
  showQuot: boolean;

  clearOutputs() {
    this.showSum = false;
    this.showDiff = false;
    this.showProd = false;
    this.showQuot = false;
  }
  calculateSum() {
    this.output = +this.sum1 + +this.sum2;
    this.formula = this.sum1 + " + " + this.sum2 + " = " + this.output;
    this.clearOutputs();
    this.showSum = true;
  }

  calculateDiff() {
    this.output = +this.diff1 - +this.diff2;
    this.formula = this.diff1 + " - " + this.diff2 + " = " + this.output;
    this.clearOutputs();
    this.showDiff = true;
  }

  calculateProd() {
    this.output = +this.prod1 * +this.prod2;
    this.formula = this.prod1 + " * " + this.prod2 + " = " + this.output;
    this.clearOutputs();
    this.showProd = true;
  }

  calculateQuot() {
    this.output = +this.quot1 / +this.quot2;
    this.formula = this.quot1 + " / " + this.quot2 + " = " + this.output;
    this.clearOutputs();
    this.showQuot = true;
  }
}
