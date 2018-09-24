import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  film_centre = 'PVR Cinemas';
  show_timing = ["Morning 8", "Evening 6", "Midnight 12"];
  qty : number;
  cost: number 
  
  constructor () {
  console.log(this.qty);
  

  }
 Cost_of() {
 this.cost = this.qty * 120;
 }
  }
 

