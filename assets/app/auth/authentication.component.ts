import{Component} from '@angular/core';


@Component({
    selector:'app-authentication',
    template:`
            <header class="row spacing">
                <nav class="col-md-8 col-md-offset">
                    <ul class="nav nav-tabs">
                        <li routerLinkActive="active"> <a [routerLink]="['signin']">Signin</a></li>
                        <li routerLinkActive="active"> <a [routerLink]="['signup']">Signup</a></li>
                        <li routerLinkActive="active"> <a [routerLink]="['logout']">Logout</a></li>
                    </ul>
                </nav>

            </header>
            <router-outlet></router-outlet>
        `
})
export class AuthenticationComponent{
}