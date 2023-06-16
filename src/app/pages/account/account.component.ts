import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CarouselStateService } from '../../services/carousel-state.service';
import { AccountMenuStateService } from '../../services/account-menu-state.service';
import { AuthService } from 'src/app/services/auth.service';
import  { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{
  user: User | null = null;

  constructor(
    public accountMenuStateService: AccountMenuStateService,
    public carouselStateService: CarouselStateService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cd: ChangeDetectorRef
    ) { }

    ngOnInit() {
      this.accountMenuStateService.setActive(true);
      this.carouselStateService.setActive(false);
          
      // get connected user
      const connectedUser = this.authService.connectedUser;
      if (connectedUser) {
        this.userService.getUser(connectedUser.id).subscribe(user => {
          setTimeout(() => {
            this.user = user;
            this.userForm.setValue({
              firstname: user.firstname,
              lastname: user.lastname,
              email: user.email,
              phone: user.phone
            }, { emitEvent: false });
            this.cd.detectChanges();
          }, 0);
        });
      }
    }
    
  userForm = new FormGroup({
    firstname: new FormControl([]),
    lastname: new FormControl([]),
    email: new FormControl([]),
    phone: new FormControl([]),
  });

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

  visible!: boolean;
  visible2!: boolean;

    showDialog() {
        this.visible = true;
    }

    showDialog2() {
      this.visible2 = true;
  }

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

  updateUser() {
    if (this.user && this.userForm.valid) {
      const updatedUser = {...this.user, ...this.userForm.value};
      this.userService.updateUser(this.user.id, updatedUser).subscribe(user => {
        this.user = user;
      });
    }
  }
  
  
  
}
 
