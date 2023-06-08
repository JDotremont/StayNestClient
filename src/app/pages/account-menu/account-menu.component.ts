import { Component, OnInit } from '@angular/core';
import { AccountMenuStateService } from 'src/app/services/account-menu-state.service';
import { CarouselStateService } from '../../services/carousel-state.service';

@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss']
})
export class AccountMenuComponent implements OnInit{
  constructor(
    public accountMenuStateService: AccountMenuStateService,
    public carouselStateService: CarouselStateService
    ) { }

  ngOnInit() {
    this.accountMenuStateService.setActive(true);
    this.carouselStateService.setActive(false);
  }
}
