import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private uservice:UserService ){}
  onSetToActive(id: number) {
    //this.userSetToActive.emit(id);
    this.uservice.onSetToActive(id);
  }
}
