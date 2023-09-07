import { createAction, props } from '@ngrx/store';
import { Person } from 'src/app/interfaces/person.interface';

export const loadPeople = createAction('Load People');
export const loadPeopleSuccess = createAction('Load People Success', props<{ people: Person[] }>());