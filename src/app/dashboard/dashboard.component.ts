import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  number:number;
  name:any="Pooja@gmail.com";

  constructor(private router: Router) { }

  ngOnInit() {
// code for dropdown menu for color 
//     $(document).ready(function(){
//                 $('#parent').click(function(e) {
//                         e.stopPropagation();
//                         var $el = $('mat-list',this);
//                         $('#child').not($el).slideUp();
//                         $el.stop(true, true).slideToggle();
//                     });
//                         $('#child ').click(function(e) {
//                         e.stopImmediatePropagation();  
//                     });
//         });
  }
//  code for routing the sub menus
  set(event:number){
    this.number=event;
    switch(this.number){
        case 0:
                this.router.navigate(['/snav/production']);
                break;
        case 1:
                this.router.navigate(['/snav/crumb']);
                break;
        case 2:this.router.navigate(['/snav/solution']);
                break;
        case 3:
                this.router.navigate(['/snav/crumb']);
                break;
        case 4:this.router.navigate(['/snav/crumb']);
                break;
        case 5:this.router.navigate(['/snav/crumb']);
                break;
        case 6:this.router.navigate(['/snav/crumb']);
                break;
        default:alert("error");
    }
  }

  login(){
  	this.router.navigate(['/login']);
  }

}
