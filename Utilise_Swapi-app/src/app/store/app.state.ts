import { PeopleState, personReducer } from "./person/person.reducer";
import {ActionReducerMap} from '@ngrx/store';



export interface AppState {

    persons:PeopleState;
}

export const appReducer:ActionReducerMap<AppState> = {

    persons:personReducer

}