import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wheelItems = [
    "1",
    "3", 
    "5",
    "4", 
    "6", 
    "2", 
    "7", 
    "8"
  ];
  wheelColors = ['#ff1aff', '#1fa718', '#ffb61a', '#1aff81', '#d1ff1a', '#fc5800', '#1a76ff', '#aef106'];
}
