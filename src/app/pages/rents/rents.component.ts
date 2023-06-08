import { Component, OnInit } from '@angular/core';
import { CarouselStateService } from '../../services/carousel-state.service';
import { AccountMenuStateService } from '../../services/account-menu-state.service';

@Component({
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.scss']
})
export class RentsComponent implements OnInit{
  constructor(
    private carouselStateService: CarouselStateService,
    public accountMenuStateService: AccountMenuStateService
    ) { }

  ngOnInit() {
    this.carouselStateService.setActive(false);
    this.accountMenuStateService.setActive(true);
  }
}
