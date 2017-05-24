import { Component } from '@angular/core';
import { AppService, IMessage } from './contact.service';

@Component({
  selector: 'contact-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  title = 'Angular PHP Email Example!';
  message: IMessage = {};

  constructor(private appService: AppService) {

  }

  sendEmail(message: IMessage) {
    this.appService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    })
  }
}
