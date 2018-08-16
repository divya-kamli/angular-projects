import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { ServersService } from '../servers.service';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {

    //Below code is perfect when we dont use Resolver
    /*
    const id=this.route.snapshot.params['id'];

    if(id ==null || undefined)
    {
      this.server = this.serversService.getServer(1);
    }
    else
    {
      this.route.params.subscribe(
        (par: Params) => 
        {
          console.log('ngOninit server comp='+ par['id']);
          this.server = this.serversService.getServer(+par['id']);
          console.log('id='+this.server.id);
          console.log('name='+this.server.name);
          
        }
      )
    }    */
    //End for code without resolver

     //Below code is when we use Resolver
      this.route.data.subscribe(
        (data:Data) =>
        {
          this.server=data['server'];
        }
      )

    
  }

  onEdit()
  {
    this.router.navigate(['edit'],{relativeTo: this.route, queryParamsHandling: 'merge'});
  }

}
