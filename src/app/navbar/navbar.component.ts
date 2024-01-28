import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  // Help Links
  helpLinks: string[] = [
    "Order Status",
    "Shipping & Delivery",
    "Returns",
    "Order Cancellation",
    "Size Charts",
    "Contact Us",
    "Membership",
    "Promotions & Discounts",
    "Product Advice",
    "Send Us Feedback"
  ]
  
  // Help Tooltip
  isEnter: boolean = false

  handleEnter() {
    this.isEnter = !this.isEnter
  }

  handleLeave() {
    this.isEnter = false;
  }

}
