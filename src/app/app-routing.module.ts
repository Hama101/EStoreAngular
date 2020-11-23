import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component'
import { CarsComponent } from './cars/cars.component';
import {LaptopsComponent} from './laptops/laptops.component'

const routes: Routes = [
      {path : 'laptops'  , component: LaptopsComponent },
      {path : 'cars', component: CarsComponent  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const listComponent = [CarsComponent , LaptopsComponent]
