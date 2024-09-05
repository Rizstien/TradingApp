import { Routes } from '@angular/router';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { TradingComponent } from './components/TradingListView/trading/trading.component';

export const routes: Routes = [
    { path:"dashboard", component:DashboardComponent},
    { path:"trading", component:TradingComponent}
];
 