import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { RowModule } from './module/layout/row/row.module';

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
    SmallinfoboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing,
    RowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
