import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public username!: string;

  constructor(public activeRouter: ActivatedRoute) {
    activeRouter.params.subscribe((param: any) => {
      this.username = param.username;
    })
    var formElement = <HTMLFormElement>document.getElementById('login-link');
    formElement.style.display = 'none';
  }
  ngOnDestroy(): void {
    var formElement = <HTMLFormElement>document.getElementById('login-link');
    formElement.style.display = 'inline-block';
  }

  ngOnInit(): void {
  }

}
