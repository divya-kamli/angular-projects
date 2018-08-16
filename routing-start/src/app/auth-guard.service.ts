import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Observable } from "../../node_modules/rxjs";
import { Injectable } from "../../node_modules/@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild
{
    constructor(private authService: AuthService,private route: Router )
    {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :
    Observable<boolean> | Promise<boolean> | boolean  
    {

        return this.authService.isAuthenticated().then(
            (authFlag: boolean) =>
            {
                if(authFlag)
                    return true;
                else
                {
                    this.route.navigate(['/404']);
                }
            }
        );
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :
    Observable<boolean> | Promise<boolean> | boolean  
    {
        return this.canActivate(route,state);
    }
}