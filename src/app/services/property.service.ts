import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAll(): Observable<any[]> {
    // get properties from API
    return this.httpClient.get<any[]>( environment.apiUrl + '/properties');
  }

  add(property: any){
    return this.httpClient.post<any>( environment.apiUrl + '/properties', property);
  }

  delete(id: number){
    return this.httpClient.delete<any>( environment.apiUrl + '/properties/' + id);
  }

  update(id: number, property: any): Observable<any> {
    return this.httpClient.put<any>(`${environment.apiUrl}/properties/${id}`, property);
  }

  getProperty(id: number): Observable<any> {
    return this.httpClient.get<any>( environment.apiUrl + '/properties/' + id);
  }
}
