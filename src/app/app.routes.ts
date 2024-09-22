import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { authGuard } from './core/guards/auth.guard';

import { CurrencylistComponent } from './components/listviews/currency/currencylist/currencylist.component';
import { TradinglistComponent } from './components/listviews/trading/tradinglist/tradinglist.component';
import { UserslistComponent } from './components/listviews/users/userslist/userslist.component';

export const routes: Routes = [
{path:'',redirectTo: 'login',pathMatch: 'full'},
{path:'login',component: LoginComponent},
{path:'signup', component: SignUpComponent},
{path:"coins", component:CurrencylistComponent ,canActivate: [authGuard]},
{path:"trade", component:TradinglistComponent},
{path:"user", component:UserslistComponent}

];
