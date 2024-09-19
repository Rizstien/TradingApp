import { Routes } from '@angular/router';
import { TradingComponent } from './components/TradingListView/trading/trading.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { authGuard } from './core/interceptors/guards/auth.guard';

export const routes: Routes = [
{path: '',redirectTo: 'login',pathMatch: 'full'},
{path: 'login',component: LoginComponent},
{path: 'signup', component: SignUpComponent},
{path:"trading", component:TradingComponent ,canActivate: [authGuard]}


];
