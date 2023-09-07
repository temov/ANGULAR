import { createReducer, on } from '@ngrx/store';
import { Person } from 'src/app/interfaces/person.interface';
import { loadPeople } from './person.actions';
import { loadPeopleSuccess } from './person.actions';

export interface PeopleState {
    people: Person[];
    loading: boolean;
  }

  export const initialState: PeopleState = {
    people: [],
    loading: false,
   
  };

  export const personReducer = createReducer(

    initialState,

    on(loadPeople, (state) => {

        return{
                ...state, 
                loading: true 
                };
    
                }),

    on(loadPeopleSuccess, (state, {people}) => {
                    
        return{
                 ...state, 
                people:people,
                loading: false 
                            };
                
                            })

  )