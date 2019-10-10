import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { MainNavigationComponent } from './layout/main-navigation/main-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { VehicleRequestComponent } from './pages/vehicle-request/vehicle-request.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainNavigationComponent,
    VehicleRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
