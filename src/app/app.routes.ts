import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//pages
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
    // Root
    {
        component: LoginComponent,
        path: ''
    },
    {
        component: DashboardComponent,
        path: 'dashboard'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);