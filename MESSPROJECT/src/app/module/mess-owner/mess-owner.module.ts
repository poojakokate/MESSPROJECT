import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessOwnerRoutingModule } from './mess-owner-routing.module';
import { MessOwnerDetailsComponent } from './mess-owner-details/mess-owner-details.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { CheckReviewComponent } from './check-review/check-review.component';


@NgModule({
  declarations: [MessOwnerDetailsComponent, AddMenuComponent, CheckReviewComponent],
  imports: [
    CommonModule,
    MessOwnerRoutingModule
  ]
})
export class MessOwnerModule { }
