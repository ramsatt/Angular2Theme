import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//pages
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { SitesComponent } from './pages/sites/sites.component';
import { AssetsComponent } from './pages/assets/assets.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { DispatchComponent } from './pages/dispatch/dispatch.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { BranchesComponent } from './pages/branches/branches.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { AccountingComponent } from './pages/accounting/accounting.component';
import { ReportsComponent } from './pages/reports/reports.component';

const routes: Routes = [
    // Root
    {
        component: LoginComponent,
        path: ''
    },
    {
        component: DashboardComponent,
        path: 'dashboard'
    },
    {
        component: AccountsComponent,
        path: 'accounts'
    },
    {
        component: SitesComponent,
        path: 'sites'
    },
    {
        component: AssetsComponent,
        path: 'assets'
    },
    {
        component: TicketsComponent,
        path: 'tickets'
    },
    {
        component: DispatchComponent,
        path: 'dispatch'
    },
    {
        component: ScheduleComponent,
        path: 'schedule'
    },
    {
        component: BranchesComponent,
        path: 'branches'
    },
    {
        component: InventoryComponent,
        path: 'inventory'
    },
    {
        component: AccountingComponent,
        path: 'accounting'
    },
    {
        component: ReportsComponent,
        path: 'reports'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);