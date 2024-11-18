import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';

export const routes: Routes = [
    {path:"sign-up",component:SignUpComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"update/:id",component:UpdateComponent}
];
