import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessOwnerDetailsComponent } from './mess-owner-details/mess-owner-details.component';
import { AddMenuComponent } from './add-menu/add-menu.component';


const routes: Routes = [
  {path:'messDetails',component:MessOwnerDetailsComponent},
  {path:'addMenu',component:AddMenuComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessOwnerRoutingModule { }
// dfgdfdgdgd
