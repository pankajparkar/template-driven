import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardFancyComponent } from './dashboard/dashboard-fancy.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard-fancy', component: DashboardFancyComponent },
    { path: '**', redirectTo: 'dashboard' },
];
