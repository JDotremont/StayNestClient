import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'StayNestClient';

  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
