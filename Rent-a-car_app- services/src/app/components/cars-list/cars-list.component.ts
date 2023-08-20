import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { CarRentService } from 'src/app/services/car-rent.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  
      cars_list : Car[]= [];
      filteredCars:Car[] = [];
      showAllCars:boolean = true;
      sortDirection:"asc" | "desc" = "asc"

      constructor(
        private readonly carRentService: CarRentService,
      ) {}

  ngOnInit(): void {
    

    this.cars_list = this.carRentService.getCars();
    this.showAllCars = this.carRentService.showAllCars;

  }

  ngDoCheck(): void {
    

    this.filteredCars = this.carRentService.filteredCars;
    this.showAllCars = this.carRentService.showAllCars;

  }

      toggleSort(): void {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      }

      toggleRented(car:Car):void {
        this.carRentService.toggleRented(car)

        
    }
      filterCars(filter:string):void{

      this.carRentService.filterCars(filter)
    }
}
 

  




