import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { CarRentService } from 'src/app/services/car-rent.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  
      cars-list : Car[]= [];

      constructor(
        private readonly carRentService: CarRentService
      ) {}

  ngOnInit(): void {
    

    this.cars-list = this.carRentService.getCars(),
  }
}
 

  


function constructor(private: any, readonly: any, carRentService: any, CarRentService: typeof CarRentService) {
  throw new Error('Function not implemented.');
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

