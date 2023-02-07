import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string='';
  password:string='';
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['/dashboard',this.username]);
  }
}
