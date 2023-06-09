import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit, AfterViewInit{

    constructor(
        private propertyService: PropertyService,
        private route : ActivatedRoute,
        ) {console.log(this.route.snapshot.params['id']);
         }


    map!: L.Map;
    marker!: L.Marker;
    ngAfterViewInit(): void {
        this.propertyService.getProperty(this.route.snapshot.params["id"]).subscribe({
            next: data => {
                this.property = data;
                this.map = L.map('map').setView(data.location.split(',').map((x:string) => parseFloat(x)), 16);
                this.marker = L.marker(data.location.split(',').map((x:string) => parseFloat(x))).addTo(this.map);
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }).addTo(this.map);
            },
            error: error => {
                console.error('There was an error!', error);
            },
            complete: () => console.log('Done')
        })

        
    }
  

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
      {
          label: 'Bottom',
          value: 'bottom'
      },
      {
          label: 'Top',
          value: 'top'
      },
      {
          label: 'Left',
          value: 'left'
      },
      {
          label: 'Right',
          value: 'right'
      }
  ];

  responsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  date!: Date;
  minDate!: Date;
  maxDate!: Date;

  property: any;

  amenities: any[] = [];
  
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
  }
}
