import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wheelItems = [
    "1",
    "assets/gift.png", 
    "5",
    "assets/prize.png", 
    "6", 
    "assets/star.png", 
    "7", 
    "assets/treasure.png"
  ];
  wheelColors = ['#ff1aff', '#1fa718', '#ffb61a', '#1aff81', '#d1ff1a', '#fc5800', '#1a76ff', '#aef106'];
  spinning = true;
  disableBtn = false;
  spinBtnText = "Spin";
  randomElement = "";
  @ViewChild('wheel')wheel!:ElementRef;
  @ViewChild('outsideElements')outsideElements!:ElementRef;
  constructor(private renderer: Renderer2) {}

  spinBtn() {
    if (this.spinning) {
      this.disableBtn = true;
      let randomStop = Math.floor(Math.random() * this.wheelItems.length);
      let chosenElement = this.wheelItems[randomStop];
      let degreesToRotate = 1440 + 360 * 5 - (randomStop * 45);
  
      this.spinBtnText = 'Spinning';
      this.randomElement = '';
  

      this.randomElement = `${chosenElement}`
      this.renderer.setStyle(this.wheel.nativeElement, 'transition', 'none');
        this.renderer.setStyle(this.wheel.nativeElement, 'transform', `rotate(0deg)`);
  
      setTimeout(() => {
        this.renderer.setStyle(this.wheel.nativeElement, 'transition', 'transform 8s ease-out');
        this.renderer.setStyle(this.wheel.nativeElement, 'transform', `rotate(${degreesToRotate}deg)`);
      }, 0);
  
      setTimeout(() => {
        this.spinning = false;
      
        this.wheel.nativeElement.style.transition = '';
        this.wheel.nativeElement.querySelector(`.elements:nth-child(${randomStop + 1})`).classList.add('blink');
        this.outsideElements.nativeElement.querySelector(`.outside_elements_box:nth-child(${randomStop + 1})`).classList.add('blink');
      
        setTimeout(() => {
          this.wheel.nativeElement.querySelector(`.elements:nth-child(${randomStop + 1})`).classList.remove('blink');
          this.outsideElements.nativeElement.querySelector(`.outside_elements_box:nth-child(${randomStop + 1})`).classList.remove('blink');
          this.disableBtn = false;
          this.spinBtnText = 'Spin';
          this.spinning = true;
        }, 4000);
      }, 8000);
      
  }
}
}
