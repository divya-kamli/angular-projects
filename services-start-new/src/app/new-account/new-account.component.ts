import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
 // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private logService: LoggingService,private accService: AccountService)
  {
    this.accService.statusUpdated.subscribe(
      (status:string) => alert('See Status changed to '+status)
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accService.addAccount(accountName,accountStatus);
    // this.logService.logStatusChange(accountStatus);
  }
}
