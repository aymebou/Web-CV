import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import {CustomMaterialModule} from "./core/material.module";


import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { IndepthComponent } from './indepth/indepth.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Full-stack internship' } },
  { path: 'home', component: HomeComponent, data: { title: 'Full-stack internship' } },
  { path: 'overview', component: OverviewComponent, data: { title: 'Overview' } },
  { path: 'indepth', component: IndepthComponent, data: { title: 'In-depth view' } }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OverviewComponent,
    IndepthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
