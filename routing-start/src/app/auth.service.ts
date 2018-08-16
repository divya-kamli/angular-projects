import { Injectable } from "../../node_modules/@angular/core";
import { resolve } from "../../node_modules/@types/q";

@Injectable()
export class AuthService
{
    loggedIn:boolean = false;

    isAuthenticated()
    {
        const promise= new Promise(
            (resolve,reject) =>
            {
                setTimeout( 
                    () => 
                    {
                        resolve(this.loggedIn)
                    }
                    ,1000);
            }
        )
        return promise;
    }
    logIn()
    {
        this.loggedIn=true;
    }

    logOut()
    {
        this.loggedIn=false;
    }
}