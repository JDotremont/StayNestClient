import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  addMessage(message: any) {
    return this.httpClient.post<any>( environment.apiUrl + '/message', message);
  }

  getMessage() {
    return this.httpClient.get<any[]>( environment.apiUrl + '/message');
  }

  deleteMessage(id: number){
    return this.httpClient.delete<any>( environment.apiUrl + '/message/' + id);
  }

  getMessageById(id: number): Observable<any> {
    return this.httpClient.get<any>( environment.apiUrl + '/message/' + id);
  }
}
