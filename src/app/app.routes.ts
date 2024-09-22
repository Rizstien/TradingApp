import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
// import { authGuard } from './core/interceptors/guards/auth.guard';
import { authGuard } from './core/guards/auth.guard';
import { CoinsComponent } from './components/listviews/coins/coins/coins/coins.component';
import { TradeComponent } from './components/listviews/coins/trades/trade/trade.component';

export const routes: Routes = [
{path: '',redirectTo: 'login',pathMatch: 'full'},
{path: 'login',component: LoginComponent},
{path: 'signup', component: SignUpComponent},
{path:"coins", component:CoinsComponent ,canActivate: [authGuard]},
{path:"trade", component:TradeComponent}
];
