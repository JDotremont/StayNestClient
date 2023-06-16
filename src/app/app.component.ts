import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CarouselStateService } from './services/carousel-state.service';
import { AccountMenuStateService } from './services/account-menu-state.service';
import { UserService } from './services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(
    public carouselStateService: CarouselStateService,
    public accountMenuStateService: AccountMenuStateService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private searchService: SearchService,
    private cd: ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.carouselStateService.setActive(true);
    this.accountMenuStateService.setActive(false);

    this.searchForm = this.formBuilder.group({
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      startDate: [new Date(), [Validators.required]],
      endDate: [new Date(), [Validators.required]],
      numberOfGuests: [1, [Validators.required]],
    })    
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
    setTimeout(() => {
      this.visible = true;
    }, 0);
  }  

  minDate!: Date;
  maxDate!: Date;

  searchForm!: FormGroup;

  onSubmit() {
    if (this.searchForm.valid) {
      const searchInfo = this.searchForm.value;
      const startDate = new Date(searchInfo.startDate);
      const endDate = new Date(searchInfo.endDate);
      const numberOfNights = Math.round(Math.abs((endDate.getTime() - startDate.getTime())/(24*60*60*1000)));
      searchInfo.numberOfNights = numberOfNights;
      localStorage.setItem('searchInfo', JSON.stringify(searchInfo));
    }

    if (this.searchForm.valid) {
      const searchInfo = this.searchForm.value;
      const startDate = new Date(searchInfo.startDate);
      const endDate = new Date(searchInfo.endDate);
      const numberOfNights = Math.round(Math.abs((endDate.getTime() - startDate.getTime())/(24*60*60*1000)));
      searchInfo.numberOfNights = numberOfNights;
      // Effectuez la recherche et affichez les résultats.
      // Vous voudrez probablement faire quelque chose de plus utile avec les résultats que simplement les afficher dans la console.
      this.searchService.searchPlaces(searchInfo).subscribe(results => {
        console.log(results);
      });
    }
  }

  logout() {
    this.authService.logout();
  }

  get isLogged() {
    return this.authService.isLogged;
  }
  
}
