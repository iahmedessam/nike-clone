import { Component } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.css'
})
export class MainNavbarComponent {

  // Search Active 
  onInput: boolean = false

  handleInput() {
    this.onInput = !this.onInput
  }

  handleCancelinput() {
    this.onInput = !this.onInput
  }

  // Menu Bar 
  menubarOpen: boolean = false

  handleMenubar() {
    this.menubarOpen = !this.menubarOpen
  }

  handleCancelMenubar() {
    this.menubarOpen = !this.menubarOpen
  }

}
