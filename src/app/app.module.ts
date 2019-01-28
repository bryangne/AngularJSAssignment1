import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculateSumComponent } from './calculate-sum/calculate-sum.component';
import { SumDirective } from './sum.directive';

@NgModule({
  declarations: [
    AppComponent,
    CalculateSumComponent,
    SumDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
