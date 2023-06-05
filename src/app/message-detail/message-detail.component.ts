import { Component } from '@angular/core';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent {
  username: string = 'User';
  hostname: string = 'Host';
  user_message: string = 'User message';
  host_message: string = 'Host message';
}
