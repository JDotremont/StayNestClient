import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getPlaces() {
    return this.httpClient.get<any[]>( environment.apiUrl + '/properties');
  }
}
