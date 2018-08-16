import { Observable } from "../../../../node_modules/rxjs";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "../../../../node_modules/@angular/router";

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}   

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>
{

    canDeactivate(component: CanComponentDeactivate,
    currRoute: ActivatedRouteSnapshot, state:RouterStateSnapshot,
    nextState: RouterStateSnapshot) : 
    Observable<boolean> | Promise<boolean> | boolean
    {
        console.log("in CanDeactivateGuard component.canDeactivate()="+component.canDeactivate());
        return component.canDeactivate();
    }
}
