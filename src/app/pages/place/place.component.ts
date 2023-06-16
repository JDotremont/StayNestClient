import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';
import { PropertyService } from 'src/app/services/property.service';
import { BookingService } from 'src/app/services/booking.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit, AfterViewInit{

  constructor(
    private propertyService: PropertyService,
    private route : ActivatedRoute,
    private bookingService: BookingService,
    private wishlistService: WishlistService,
    private router: Router
  ) {
  }

  map!: L.Map;
  marker!: L.Marker;
  property: any;
  priceByNight!: number;
  serviceFee!: number;
  totalPrice!: number;
  checkInTime!: string;
  checkOutTime!: string;
  numberOfNights!: number;
  isFavorite: boolean = false;
  hostId: number | undefined;

  images = [
    'https://picsum.photos/600/400',
    'https://picsum.photos/600/400',
    'https://picsum.photos/600/400',
    'https://picsum.photos/600/400',
    'https://picsum.photos/600/400',
  ];

  position: string = 'bottom';
  showIndicatorsOnItem: boolean = true;
  positionOptions = [
    { label: 'Bottom', value: 'bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' }
  ];

  responsiveOptions: any[] = [
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '560px', numVisible: 1 }
  ];

  date!: Date;
  minDate!: Date;
  maxDate!: Date;
  amenities: any[] = [];

  ngAfterViewInit(): void {
    this.propertyService.getProperty(this.route.snapshot.params["id"]).subscribe({
      next: data => {
        this.property = data;
        console.log(this.property);
        

        this.hostId = this.property.userId;
        console.log(this.hostId);
        

        const searchInfo = JSON.parse(localStorage.getItem('searchInfo') || '{}');
        const numberOfNights = searchInfo.numberOfNights;

        this.priceByNight = this.property.priceByNight * numberOfNights;
        this.serviceFee = 40;  
        this.totalPrice = this.priceByNight + this.property.cleaningFee + this.serviceFee;

        let checkInDate = new Date(this.property.checkInTime);
        let checkOutDate = new Date(this.property.checkOutTime);
        this.checkInTime = `${checkInDate.getUTCHours().toString().padStart(2, '0')}:${checkInDate.getUTCMinutes().toString().padStart(2, '0')}`;
        this.checkOutTime = `${checkOutDate.getUTCHours().toString().padStart(2, '0')}:${checkOutDate.getUTCMinutes().toString().padStart(2, '0')}`;

        this.map = L.map('map').setView(this.property.location.split(',').map((x:string) => parseFloat(x)), 16);
        this.marker = L.marker(this.property.location.split(',').map((x:string) => parseFloat(x))).addTo(this.map);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);
      },
      error: error => {
        console.error('There was an error!', error);
      },
      complete: () => console.log('Done')
    });
  }

  ngOnInit() {
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

    // this.isFavorite = this.wishlistService.isFavorite(this.route.snapshot.params["id"]);

    this.route.params.subscribe(params => {
      this.hostId = params['hostId'];
    });
  }

  sendMessage() {
    console.log("sendMessage was called");
    console.log("hostId is", this.hostId);
    if(this.hostId !== undefined) {
        this.router.navigate(['/messages', { receiverId: this.hostId }]);
    }
}


}