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
  person$: Observable<Person |undefined>;
  error: string | undefined;

  constructor( private route: ActivatedRoute,
    private store: Store<{ people: Person[] }>) {}

    ngOnInit() {
      const paramMap = this.route.snapshot.paramMap;
      const idParam = paramMap.get('id');
  
      if (idParam !== null) { // Check if 'idParam' is not null
        const personId = +idParam; // Convert 'idParam' to a number
        this.person$ = this.store.select(selectPeople).pipe(
          map((people) => people.find((person) => person.id === personId))
        );
      } else {
        this.error = 'Person not found';
      }
    }
}

