import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CarouselStateService } from '../../services/carousel-state.service';
import { AccountMenuStateService } from '../../services/account-menu-state.service';

@Component({
  templateUrl: './property-add.component.html',
  styleUrls: ['./property-add.component.scss']
})
export class PropertyAddComponent implements OnInit{
  constructor(
    private carouselStateService: CarouselStateService,
    public accountMenuStateService: AccountMenuStateService
    ) { }

  ngOnInit() {
    this.carouselStateService.setActive(false);
    this.accountMenuStateService.setActive(true);
  }
  propertyForm = new FormGroup({
    name: new FormControl([]),
    address: new FormControl([]),
    type: new FormControl([]),
    priceByNight: new FormControl([]),
    priceByWeek: new FormControl([]),
  });

  propertyTypes: any[] = [
    {label:'Castle', value:'castle'},
    {label:'Apartment', value:'apartment'},
    {label:'Cottage', value:'cottage'}
    // ajoutez d'autres types de propriétés ici
  ];

  amenities: any[] = [
    {name: 'Free Parking'},
            {name: 'Kitchen'},
            {name: 'Swimming Pool'},
            {name: 'Wifi'},
            {name: 'Gym'},
            {name: 'Air Conditioning'},
            {name: 'Dryer'},
            {name: 'Washing Machine'},
            {name: 'Shampoo'},
            {name: 'Television'},
            {name: 'Hair Dryer'},
            {name: 'Heating'},
            {name: 'Basic Equipment'},
            {name: 'Cleaning Products'},
            {name: 'Hot Water'},
            {name: 'Sheets'},
            {name: 'Clothing Storage Space'},
            {name: 'Clothesline'},
            {name: 'Extra Pillows and Blankets'},
            {name: 'Hangers'},
            {name: 'Blinds'},
            {name: 'Board Games'},
            {name: 'Children’s Dinnerware'},
            {name: 'High Chair'},
            {name: 'Carbon Monoxide Detector'},
            {name: 'Fire Extinguisher'},
            {name: 'First Aid Kit'},
            {name: 'Smoke Detector'},
            {name: 'Barbecue Utensils'},
            {name: 'Coffee Maker'},
            {name: 'Basic Kitchen Equipment'},
            {name: 'Dining Table'},
            {name: 'Dishes and Cutlery'},
            {name: 'Freezer'},
            {name: 'Nespresso Machine'},
            {name: 'Oven'},
            {name: 'Refrigerator'},
            {name: 'Stove'},
            {name: 'Wine Glasses'},
            {name: 'Private Entrance'},
            {name: 'Barbecue'},
            {name: 'Fire Pit'},
            {name: 'Backyard'},
            {name: 'Outdoor Furniture'},
            {name: 'Patio or Balcony'},
    ];
  }
