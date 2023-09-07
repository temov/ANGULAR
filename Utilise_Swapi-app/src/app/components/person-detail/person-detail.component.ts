import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Person } from 'src/app/interfaces/person.interface';
import { selectPeople } from 'src/app/store/person/person.selectors';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  [x: string]: string;
  person$: Observable<Person |undefined>;

  constructor(private route: ActivatedRoute, private store: Store<{ selectedPerson: Person | undefined }>) {}

  ngOnInit() {

    // Select the list of people from the store and filter by ID
    

    const paramMap = this.route.snapshot.paramMap;

  if (paramMap.has('id')) {
    const personId = +paramMap.get('id'); // Get the 'id' parameter from the route
    this.person$ = this.store.select(selectPeople).pipe(
      map((people) => people.find((person) => person.id === personId))
    );
  } else {
    this.error = 'Person not found';
  }
  }
}

