import { Component, OnInit } from '@angular/core';
import { CarouselStateService } from './services/carousel-state.service';
import { AccountMenuStateService } from './services/account-menu-state.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(
    public carouselStateService: CarouselStateService,
    public accountMenuStateService: AccountMenuStateService
    ) { }

  ngOnInit() {
    this.carouselStateService.setActive(true);
    this.accountMenuStateService.setActive(false);

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);
  }

  title = 'StayNestClient';

  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  visible!: boolean;

  showDialog() {
        this.visible = true;
  }

  date!: Date;
  minDate!: Date;
  maxDate!: Date;

  searchForm = new FormGroup({
  });
}
