import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.servcie";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver-service";


const appRoutes:Routes = [
    {path : 'home', component: HomeComponent},
  
    {path : 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent},
  
    ]},
    {path : 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
        {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]},
        {path: ':id', component: ServerComponent, resolve: {server: ServerResolver}}
      ]
    },
    {
      path: '404', component: PageNotFoundComponent
    }
    ,
    {
      path:'', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'error', component: ErrorPageComponent, data: {'msg': 'You have an error in application'}
    },
    {
      path: '**', redirectTo: '/404'
    }
  ]
  

@NgModule({
    imports:[
        //RouterModule.forRoot(appRoutes,{useHash: true})
       RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule
{

}

// export const AppRoutingModule=RouterModule.forRoot(appRoutes);