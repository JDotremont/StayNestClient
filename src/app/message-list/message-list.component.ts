import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Message } from '../models/message.model';
import { User } from '../models/user.model';


@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit{

  constructor(
    private messageService: MessageService,
    private authService: AuthService,
    private userService: UserService
  ) { }

  users: User[] = []; 

  handleMessages(messages: Message[], receiverId: number): void {
    const relevantMessages = messages.filter(
      message => (message.senderId === receiverId || message.receiverId === receiverId)
    );
    const userIds = [...new Set(relevantMessages.map(message => 
      message.senderId === this.authService.connectedUser?.id ? message.receiverId : message.senderId
    ))];
    this.loadUsers(userIds);
  }  
  
  
  loadUsers(userIds: number[]): void {
    userIds.forEach(userId => {
      this.userService.getUser(userId).subscribe(
        user => this.users.push(user)
      );
    });
  }
  

  ngOnInit(): void {
    const connectedUser = this.authService.connectedUser;
    if (connectedUser) {
      this.messageService.getMessageById(connectedUser.id).subscribe(
        messages => this.handleMessages(messages, connectedUser.id)
      );
    }
  }
  
  
}
