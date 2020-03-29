import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crum',
  templateUrl: './crum.component.html',
  styleUrls: ['./crum.component.css']
})
export class CrumComponent implements OnInit {
  
  weight:number;
  displayedColumns: string[] = ['ID', 'NAME', 'ADDRESS', 'CONTACT','EMAIL'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  add(){
    this.dataSource.push({ID:3,NAME:'panjabi Hotel',ADDRESS:'pune',CONTACT:'1234567890',EMAIL:'abc@gmail.com'});
  }

}

export interface PeriodicElement {
  ID:number;NAME:string;ADDRESS:string;CONTACT:string;EMAIL:string;
}

var ELEMENT_DATA: PeriodicElement[] = [
  {ID:3,NAME:'panjabi Hotel',ADDRESS:'pune',CONTACT:'1234567890',EMAIL:'abc@gmail.com'},
  {ID:3,NAME:'panjabi Hotel',ADDRESS:'pune',CONTACT:'1234567890',EMAIL:'abc@gmail.com'},
  
];
