import { Component } from '@angular/core';

import { CarouselStateService } from '../../services/carousel-state.service';

@Component({
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent {
    constructor(private carouselStateService: CarouselStateService) { }

    ngOnInit() {
      this.carouselStateService.setActive(true);
    }
  places = [
    'assets/images/styles/camping.png',
    'assets/images/styles/castle.png',
    'assets/images/styles/bnb.png',
    'assets/images/styles/cottage.png',
    'assets/images/styles/room.png',
    'assets/images/styles/farm.png',
    'assets/images/styles/countryside.png',
    'assets/images/styles/dome.png',
    'assets/images/styles/golf.png',
    'assets/images/styles/hot.png',
    'assets/images/styles/lake.png',
    'assets/images/styles/luxe.png',
    'assets/images/styles/mill.png',
    'assets/images/styles/old.png',
    'assets/images/styles/onwater.png',
    'assets/images/styles/pool.png',
    'assets/images/styles/seaside.png',
    'assets/images/styles/treehouse.png',
    'assets/images/styles/winery.png',
  ];

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
