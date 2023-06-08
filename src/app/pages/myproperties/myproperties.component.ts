import { Component, OnInit } from '@angular/core';
import { CarouselStateService } from '../../services/carousel-state.service';
import { AccountMenuStateService } from '../../services/account-menu-state.service';

@Component({
  selector: 'app-properties',
  templateUrl: './myproperties.component.html',
  styleUrls: ['./myproperties.component.scss']
})
export class MypropertiesComponent implements OnInit{
  constructor(
    private carouselStateService: CarouselStateService,
    public accountMenuStateService: AccountMenuStateService
    ) { }

  ngOnInit() {
    this.carouselStateService.setActive(false);
    this.accountMenuStateService.setActive(true);
  }
}
