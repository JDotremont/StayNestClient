import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }

  searchPlaces(searchInfo: any) {
    const url = 'http://localhost:3000/search';
    return this.http.get(url, { params: searchInfo });
  }
}