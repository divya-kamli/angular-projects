import { Injectable } from "../../node_modules/@angular/core";
import { CounterService } from "./user.counter";

@Injectable()

export class UserService
{
    constructor(private cntService:CounterService){}

    activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);

    //this.cntService.inActiveCnt=this.cntService.inActiveCnt++;
    this.cntService.updateCounter(false,true);

    console.log('Active to Inactive ='+this.cntService.inActiveCnt);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);

   // this.cntService.activeCnt=this.cntService.activeCnt++;
   this.cntService.updateCounter(true,false);
    console.log('Inactive to Active ='+this.cntService.activeCnt);
  }
}