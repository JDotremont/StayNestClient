import { Component } from '@angular/core';
import { CarouselStateService } from '../../services/carousel-state.service';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent {
    constructor(
      private carouselStateService: CarouselStateService,
      private placesService: PlacesService,
      ) { }

    ngOnInit() {
      this.carouselStateService.setActive(true);
      this.placesService.getPlaces().subscribe({
        next: data => {
          this.places = data;
        },
        error: error => {
          console.error('There was an error!', error);
        },
        complete: () => console.log('Done')
      }
      )
    }
  places: any[] = [ ];

  images = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
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
}
