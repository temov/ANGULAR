import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [

  {path:'',component: HomeComponent},
  {path:'people',component: PersonListComponent},
  {path:'person/:id',component: PersonDetailComponent},
  {path:'about',component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
