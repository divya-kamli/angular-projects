import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './user.service';
import { CounterService } from './user.counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit{

  activeUsers = [];
  inactiveUsers = [];

  activeCnt;
  inactiveCnt;

  ngOnInit()
  {
    this.activeUsers=this.userService.activeUsers;
    this.inactiveUsers=this.userService.inactiveUsers;

    this.activeCnt=this.cntService.activeCnt;
    this.inactiveCnt=this.cntService.inActiveCnt;
  }
  constructor(private userService:UserService,private cntService:CounterService)
  {
   
  }
 
}
