import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Person } from 'src/app/interfaces/person.interface';
import { AppState } from 'src/app/store/app.state';
import { loadPeople } from 'src/app/store/person/person.actions';
import { selectPeople } from 'src/app/store/person/person.selectors';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  personData:Observable<Person[]>;

  constructor(private readonly store: Store<AppState>) {}

  
  ngOnInit() {
    // Dispatch the action to fetch person data
    this.store.dispatch(loadPeople());
    // Select the list of people from the store
    this.personData = this.store.select(selectPeople);
  }
  

}


