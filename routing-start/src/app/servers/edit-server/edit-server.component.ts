import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';
import { CanDeactivateGuard, CanComponentDeactivate } from './can-deactivate-guard.servcie';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  allowEdit: boolean = false;
  changesSaved: boolean = false;

  constructor(private serversService: ServersService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id= this.route.snapshot.params['id'];
    

    this.route.params.subscribe(
      (param:Params) =>
      {
        console.log("in parmas subrcirbe");
        this.server = this.serversService.getServer(+param['id']);
      }
    )


    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    //console.log(this.route.snapshot.queryParams['opr']);
   // console.log(this.route.snapshot.fragment);

   this.route.queryParams.subscribe(
      (qryPar: Params) =>
      {
        console.log('subscribe='+qryPar['allowEdit']);     
        this.allowEdit= qryPar['allowEdit']=== '1' ? true : false;
      }
   )
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved=true;
    this.router.navigate(['../'],{relativeTo: this.route, queryParamsHandling: 'merge'});
  } 

  canDeactivate()
  {
    if(!this.allowEdit)
    {
      return true;
    }
    console.log("in EditServerComponent canDeactivate");
    if((this.serverName!==this.server.name || this.serverStatus !==this.server.status) && !this.changesSaved)
    {
      return confirm("Are you sure you want to leave current page?")
    }
    else{
      return true;
    }
  }

}
