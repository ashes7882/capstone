import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  date: string;
  amount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Adam', date: '20 August 2021', amount: 1200},
  {position: 2, name: 'Evelyn', date: '10 June 2021', amount: 1100},
  {position: 3, name: 'Sam', date: '2 May 2021', amount: 200},
  {position: 4, name: 'Anderson', date: '14 April 2021', amount: 100},
  {position: 5, name: 'Ashish', date: '12 December 2020', amount: 150},
  {position: 6, name: 'Eve', date: '1 October 2020', amount: 345},
  {position: 7, name: 'Emma', date: '4 June 2020', amount: 435},
  {position: 8, name: 'Ross', date: '7 January 2020', amount: 1000},
];

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'date', 'amount'];
  dataSource = ELEMENT_DATA;
  
}
