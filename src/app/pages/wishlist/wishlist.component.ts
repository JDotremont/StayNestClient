import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service'; 
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})


export class WishlistComponent implements OnInit {
  wishlistItems = [];

  constructor(private wishlistService: WishlistService) { }

  ngOnInit() {
    this.getWishlistItems();
  }

  getWishlistItems() {
    this.wishlistItems = this.wishlistService.getWishlistItems();
  }

  removeFromWishlist(item: any) {
    this.wishlistService.removeFromWishlist(item);
    this.getWishlistItems();
  }
}
