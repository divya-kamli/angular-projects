import { LoggingService } from "./logging.service";
import { Injectable,EventEmitter } from "../../node_modules/@angular/core";

@Injectable()
export class AccountService
{
    constructor(private logService:LoggingService){}

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      statusUpdated = new EventEmitter<string>();
    
      addAccount(newAccountName: string, newAccountStatus: string) {
        this.accounts.push({name:newAccountName, status:newAccountStatus});
        this.logService.logStatusChange(newAccountStatus);
      }
    
      updateStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.logService.logStatusChange(newStatus);
      }
}