import { Component,Input } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent {
  @Input()
  cars_list:Car[]=[];
  filteredCars: Car[] = [];
  showAllCars: boolean = true;
  sortDirection: 'asc' | 'desc' = 'asc';
  

  filterCars(filter: string) {
    this.showAllCars = false;
    if (filter === 'rented') {
      this.filteredCars = this.cars_list.filter(car => car.isRented);
    } else if (filter === 'available') {
      this.filteredCars = this.cars_list.filter(car => !car.isRented);
    }else if(filter === 'reset'){
      this.filteredCars = [];
      this.showAllCars = true;
    }
  }



  toggleRented(car:Car) {
    car.isRented = !car.isRented;

    
  }

   toggleSort() {
    this.sortDirection  = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

}
