import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  initialUsername = 'admin';
  initialPassword = 'admin'
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  username = '';
  password = '';

  handleClick(){
    if(this.username== this.initialUsername && this.password==this.initialPassword){
      this.router.navigate(['savings'])
    } else{
      alert('Username or password is wrong')
    }
  }

}
