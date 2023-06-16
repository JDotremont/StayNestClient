import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from '../services/message.service';
import { AuthService } from '../services/auth.service';
import { PropertyService } from '../services/property.service';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../models/property.models';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {
  username: string = '';
  hostname: string = '';
  user_message: string = '';
  host_message: string = '';
  propertyId?: number;
  hostId?: number;

  messageForm = new FormGroup({
    message: new FormControl('')
  });

  constructor(private messageService: MessageService,
              private authService: AuthService,
              private propertyService: PropertyService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit(): void {
    this.propertyId = this.route.snapshot.params['id'];
    if (this.propertyId !== undefined) {
      this.loadPropertyDetails();
    }
  }
  
  loadPropertyDetails(): void {
    if (this.propertyId !== undefined) {
      this.propertyService.getProperty(this.propertyId).subscribe(
        (property: Property) => {
          this.hostId = property.userId;
          console.log('Host ID:', this.hostId); // débogage
          this.loadMessages();
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  
  
  loadMessages(): void {
    const connectedUserId = this.authService.connectedUser?.id;
    if (connectedUserId && this.hostId !== undefined) {
      this.messageService.getMessage().subscribe(
        (messages: Message[]) => {
          const relevantMessages = messages.filter(message => 
            (message.senderId === connectedUserId && message.receiverId === this.hostId) ||
            (message.receiverId === connectedUserId && message.senderId === this.hostId)
          );
          // Here you process the messages to display them, similar to handleMessages()
          this.processMessages(relevantMessages);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  
  
  processMessages(messages: Message[]) {
    // Here you process the messages to display them, you may want to sort them by date, assign them to variables for display, etc.
    // I'll leave this empty as it depends on your specific use-case
  }
  
              
  

  onSubmit() {
    console.log('Attempting to submit...');
    if (this.authService.connectedUser && this.hostId !== undefined) {
      console.log('User is connected and hostId is defined.');
      const messageToSend = {
        ...this.messageForm.value,
        senderId: this.authService.connectedUser.id,
        receiverId: this.hostId, 
      };
      console.log('Sending message: ', messageToSend);
      this.messageService.sendMessage(messageToSend).subscribe(
        response => {
          console.log('Response received: ', response);
          this.loadMessages();
        },
        error => {
          console.log('Error while sending message: ', error);
        }
      );
      this.messageForm.reset();
    } else {
      console.log('User is not connected or hostId is not defined.');
    }
  }

  
}
