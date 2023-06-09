import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  addBooking(place: any) {
    return this.httpClient.post<any>( environment.apiUrl + '/booking', place);
  }

  getBooking() {
    return this.httpClient.get<any[]>( environment.apiUrl + '/booking');
  }

  deleteBooking(id: number){
    return this.httpClient.delete<any>( environment.apiUrl + '/booking/' + id);
  }

  getBookingItem(id: number): Observable<any> {
    return this.httpClient.get<any>( environment.apiUrl + '/booking/' + id);
  }

  updateBooking(id: number, place: any): Observable<any> {
    return this.httpClient.put<any>( environment.apiUrl + '/booking/' + id, place);
  }
}
