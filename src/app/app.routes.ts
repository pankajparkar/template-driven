import { ActivatedRoute, Router, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { inject, reflectComponentType } from '@angular/core';

type dashboardType = 'normal' | 'fancy' | 'extreme';

const theme: any = 'fancy';

const loadComponent = async () => {
    const cmp = await import(`./separate/dashboard/dashboard.component`).then(i => i.DashboardComponent);
    console.log(reflectComponentType(cmp)?.selector);
    return cmp;
}

export const normalRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'dashboard',
        loadComponent,
    },
    { path: '**', redirectTo: 'dashboard' },
];

export const fancyRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', loadComponent: () => import('./separate/dashboard/fancy-dashboard.component').then(i => i.FancyDashboardComponent) },
    { path: '**', redirectTo: 'dashboard' },
];

export const extremeRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', loadComponent: () => import('./separate/dashboard/extreme-dashboard.component').then(i => i.ExtremeDashboardComponent) },
    { path: '**', redirectTo: 'dashboard' },
];
