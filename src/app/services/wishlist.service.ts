import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  addToWishlist(place: any) {
    return this.httpClient.post<any>( environment.apiUrl + '/wishlist', place);
  }

  getWishlist() {
    return this.httpClient.get<any[]>( environment.apiUrl + '/wishlist');
  }

  deleteFromWishlist(id: number){
    return this.httpClient.delete<any>( environment.apiUrl + '/wishlist/' + id);
  }

  getwishlistItem(id: number): Observable<any> {
    return this.httpClient.get<any>( environment.apiUrl + '/wishlist/' + id);
  }
}
