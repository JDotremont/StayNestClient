import { Component, OnInit } from '@angular/core';
import { CarouselStateService } from '../../services/carousel-state.service';
import { AccountMenuStateService } from '../../services/account-menu-state.service';

@Component({
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit{
  constructor(
    public carouselStateService: CarouselStateService,
    public accountMenuStateService: AccountMenuStateService
    ) { }

  ngOnInit() {
    this.carouselStateService.setActive(true);
    this.accountMenuStateService.setActive(false);
  }
}
