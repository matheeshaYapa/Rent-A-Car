import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VehicleRequestComponent} from './pages/vehicle-request/vehicle-request.component';


const routes: Routes = [
  {
    path: '',
    component: VehicleRequestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
