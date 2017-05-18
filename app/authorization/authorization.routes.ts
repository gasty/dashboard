import { Route } from '@angular/router';
import { AuthorizationComponent } from './authorization.component';
import { LoginComponent } from './login/login.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

export const MODULE_COMPONENTS = [
   LoginComponent
];