import { Component } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrl: './slidebar.component.css'
})
export class SlidebarComponent {

  // Slider Counter
  counter: number = 0
  
  // Slider Array
  offers: { text: string; link: string }[] = [
    { text: "Save up to 40%", link: "Shop All Our New Marksdow" },
    { text: "Members free shipping on orders $50+", link: "sign up" },
    { text: "Get your gear faster", link: "Look for store pickup to checkout" }
  ];

  constructor() {
    this.slider() // Make the slider run automatic
  }

  slider() {
    setInterval(() => {
      this.forward();
    }, 3000);
  }

  forward() {
    this.counter++;
    if (this.counter >= this.offers.length) {
      this.counter = 0; // Reset to the first item when reaching the end
    }
  }

  back() {
    this.counter--;
    if (this.counter < 0) {
      this.counter = this.offers.length - 1; // Set to the last item when reaching the beginning
    }
  }

}