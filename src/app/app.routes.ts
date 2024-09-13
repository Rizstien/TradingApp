import { Routes } from '@angular/router';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { TradingComponent } from './components/TradingListView/trading/trading.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
},
{
    path: 'login',
    component: LoginComponent
},
{
  path: 'signup',
  component: SignUpComponent
},




    { path:"dashboard", component:DashboardComponent},
    { path:"dashboard/trading", component:TradingComponent}
];
