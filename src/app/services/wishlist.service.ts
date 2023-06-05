import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlistItems = []; // Should be saved in a database

  getWishlistItems() {
    // fetch wishlist items from database
    return this.wishlistItems;
  }

  removeFromWishlist(item: any) {
    // remove item from wishlist in database
    // const index = this.wishlistItems.indexOf(item);
    // if (index > -1) {
    //   this.wishlistItems.splice(index, 1);
    // }
  }
}
