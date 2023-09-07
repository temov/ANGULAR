import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PeopleState } from './person.reducer';

export const selectPersonState = createFeatureSelector<PeopleState>('persons');

export const selectPeople = createSelector(
  selectPersonState,
  (state) => state.people
);

export const selectPeopleLoading = createSelector(
  selectPersonState,
  (state) => state.loading
);


