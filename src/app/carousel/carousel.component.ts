import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  images = [
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
    // ... other images ...
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 10,
      },
    },
    nav: false,
  };
}
