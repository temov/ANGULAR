import { Component,Output,EventEmitter } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss']
})
export class FilterOptionsComponent {
  @Output() filterSelected = new EventEmitter<string>();

  applyFilter(filter: string) {
    this.filterSelected.emit(filter);
  }
}
