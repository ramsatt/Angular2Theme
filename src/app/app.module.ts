import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { RowModule } from './module/layout/row/row.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTablesModule } from 'angular-datatables';

//router
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppheaderComponent } from './layout/appheader/appheader.component';
import { AppmenuComponent } from './layout/appmenu/appmenu.component';
import { AppfooterComponent } from './layout/appfooter/appfooter.component';
import { IconinfoboxComponent } from './wedgets/iconinfobox/iconinfobox.component';
import { ProgressinfoboxComponent } from './wedgets/progressinfobox/progressinfobox.component';
import { SmallinfoboxComponent } from './wedgets/smallinfobox/smallinfobox.component';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppfooterComponent,
    IconinfoboxComponent,
    ProgressinfoboxComponent,
    SmallinfoboxComponent,
    AccountsComponent,
    SitesComponent,
    AssetsComponent,
    TicketsComponent,
    DispatchComponent,
    ScheduleComponent,
    BranchesComponent,
    InventoryComponent,
    AccountingComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing,
    RowModule,
    NgxDatatableModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
