import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType}  from '@ngrx/effects';
import { PeopleService } from "src/app/services/swapi.service";
import { loadPeople, loadPeopleSuccess } from "./person.actions";
import { map, switchMap } from "rxjs";

@Injectable()
export class PersonsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly peopleService: PeopleService
  ) {}

  loadPeople$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPeople),
      switchMap(() =>
        this.peopleService
          .getPeople()
          .pipe(map((people) => loadPeopleSuccess({ people: people})))
      )
    );
  });
}
