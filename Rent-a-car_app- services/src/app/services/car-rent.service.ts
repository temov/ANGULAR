import { Car } from 'src/app/interfaces/car.interface';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })

  export class CarRentService {

        cars_list:Car[]=[];
        filteredCars: Car[] = [];
        showAllCars: boolean = true;
        sortDirection: 'asc' | 'desc' = 'asc';

    private cars: Car[] = [

            {
              id:1,
              model: 'Audi A4',
              engineType: 'Gasoline',
              yearOfProduction: '2016',
              priceToRent: 100,
              image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Audi_A4_2.0_TFSI_quattro.jpg',
              isRented: false
            },
            {
              id:2,
              model: 'Bmw 3',
              engineType: 'Diesel',
              yearOfProduction: '2019',
              priceToRent: 110,
              image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/BMW_3_Series-F30.jpg',
              isRented: false
            },
            {
              id:3,
              model: 'VW Passat',
              engineType: 'Gasoline',
              yearOfProduction: '2020',
              priceToRent: 90,
              image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/VW_Passat_B8_Limousine_2.0_TDI_Highline.JPG',
              isRented: true
            }
          ] ;
          
          getCars(): Car[] {
            return this.cars;
          }
  
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