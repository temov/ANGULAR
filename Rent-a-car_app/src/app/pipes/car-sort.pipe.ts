import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';

@Pipe({
  name: 'carSort'
})

export class CarSortPipe implements PipeTransform {
    transform(cars: Car[], sortDirection: 'asc' | 'desc'): Car[] {
      return cars.sort((a, b) => {
        if (sortDirection === 'asc') {
          return a.model.localeCompare(b.model);
        } else {
          return b.model.localeCompare(a.model);
        }
      });
    }
  }