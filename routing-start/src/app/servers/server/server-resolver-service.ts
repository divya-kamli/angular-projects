import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "../../../../node_modules/@angular/router";
import { Observable } from "../../../../node_modules/rxjs";
import { ServersService } from "../servers.service";
import { Injectable } from "../../../../node_modules/@angular/core";

interface Server{
    id: number;
    name:string;
    status:string;
}

@Injectable()
export class ServerResolver implements Resolve<Server>{

    constructor(private service: ServersService){}

    resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):
    Observable<Server> | Promise<Server> | Server
    {
        return this.service.getServer(+route.params['id']);
    }

}