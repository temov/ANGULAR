import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { FilterOptionsComponent } from './components/filter-options/filter-options.component';
import { FormsModule } from '@angular/forms';
import { CarSortPipe } from './pipes/car-sort.pipe';
import { CarRentService } from './services/car-rent.service';


@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    FilterOptionsComponent,
    CarSortPipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [CarRentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
