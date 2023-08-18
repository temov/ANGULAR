import { Component,Output,EventEmitter } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';

import { CarRentService } from 'src/app/services/car-rent.service';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss']
})
export class FilterOptionsComponent {

  constructor(
    private readonly carRentService: CarRentService
  ) {}
  @Output() filterSelected = new EventEmitter<string>();

  applyFilter(filter: string) {
    this.filterSelected.emit(filter);
  }
}
