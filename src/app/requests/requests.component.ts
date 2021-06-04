import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
value = 0;

handleClick(){
  if(this.value >= 6){
    alert('Maximum value must be less than 6')
  }else{
    alert('Request has been processed');
    this.router.navigate(['home'])
  }
}
}
