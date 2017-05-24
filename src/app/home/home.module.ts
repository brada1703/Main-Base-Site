import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TranslateModule } from '@ngx-translate/core';
import { HomeRoutingModule } from './home-routing.module';

import { CollapseModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    HomeRoutingModule,
    CollapseModule.forRoot()
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
