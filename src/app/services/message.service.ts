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

  sendMessage(message: any) {
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
  
  // You may want to have a method to get all messages of a specific user, depending on your backend API
  getMessagesByUserId(userId: number): Observable<any> {
    return this.httpClient.get<any>( environment.apiUrl + '/user/' + userId + '/messages');
  }
  
  
}
