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
    {label: 'Free Parking', value: 'freeParking'},
    {label: 'Kitchen', value: 'kitchen'},
    {label: 'Swimming Pool', value: 'swimmingPool'},
    {label: 'Wifi', value: 'wifi'},
    {label: 'Gym', value: 'gym'},
    {label: 'Air Conditioning', value: 'airConditioning'},
    {label: 'Dryer', value: 'dryer'},
    {label: 'Washing Machine', value: 'washingMachine'},
    {label: 'Shampoo', value: 'shampoo'},
    {label: 'Television', value: 'television'},
    {label: 'Hair Dryer', value: 'hairDryer'},
    {label: 'Heating', value: 'heating'},
    {label: 'Basic Equipment', value: 'basicEquipment'},
    {label: 'Cleaning Products', value: 'cleaningProducts'},
    {label: 'Hot Water', value: 'hotWater'},
    {label: 'Sheets', value: 'sheets'},
    {label: 'Clothing Storage Space', value: 'clothingStorageSpace'},
    {label: 'Clothesline', value: 'clothesline'},
    {label: 'Extra Pillows and Blankets', value: 'extraPillowsAndBlankets'},
    {label: 'Hangers', value: 'hangers'},
    {label: 'Blinds', value: 'blinds'},
    {label: 'Board Games', value: 'boardGames'},
    {label: 'Children’s Dinnerware', value: 'childrensDinnerware'},
    {label: 'High Chair', value: 'highChair'},
    {label: 'Carbon Monoxide Detector', value: 'carbonMonoxideDetector'},
    {label: 'Fire Extinguisher', value: 'fireExtinguisher'},
    {label: 'First Aid Kit', value: 'firstAidKit'},
    {label: 'Smoke Detector', value: 'smokeDetector'},
    {label: 'Barbecue Utensils', value: 'barbecueUtensils'},
    {label: 'Coffee Maker', value: 'coffeeMaker'},
    {label: 'Basic Kitchen Equipment', value: 'basicKitchenEquipment'},
    {label: 'Dining Table', value: 'diningTable'},
    {label: 'Dishes and Cutlery', value: 'dishesAndCutlery'},
    {label: 'Freezer', value: 'freezer'},
    {label: 'Nespresso Machine', value: 'nespressoMachine'},
    {label: 'Oven', value: 'oven'},
    {label: 'Refrigerator', value: 'refrigerator'},
    {label: 'Stove', value: 'stove'},
    {label: 'Wine Glasses', value: 'wineGlasses'},
    {label: 'Private Entrance', value: 'privateEntrance'},
    {label: 'Barbecue', value: 'barbecue'},
    {label: 'Fire Pit', value: 'firePit'},
    {label: 'Backyard', value: 'backyard'},
    {label: 'Outdoor Furniture', value: 'outdoorFurniture'},
    {label: 'Patio or Balcony', value: 'patioOrBalcony'},
    ];
  }
