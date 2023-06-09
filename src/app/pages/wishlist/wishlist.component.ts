import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service'; 

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  wishlistItems: any[] = [];

  constructor(private wishlistService: WishlistService) { }

  ngOnInit() {
    this.getWishlistItems();
  }

  getWishlistItems() {
    this.wishlistService.getWishlist().subscribe(items => {
      this.wishlistItems = items;
    });
  }

  removeFromWishlist(item: any) {
    this.wishlistService.deleteFromWishlist(item.id).subscribe(() => {
      this.getWishlistItems();
    });
  }
}
