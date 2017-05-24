import { Component } from '@angular/core';
import { LocalizeRouterService } from 'localize-router';
import { NgForm } from '@angular/forms';

import { AppService } from './contact/contact.service';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isCollapsed:boolean = true;
  public collapsed(event:any):void {}
  public expanded(event:any):void {}

  constructor(private localize: LocalizeRouterService) {
    console.log('ROUTES', this.localize.parser.routes);
  }

  changeLanguage(lang: string) {
    this.localize.changeLanguage(lang);
  }
}
