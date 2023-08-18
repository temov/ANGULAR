import { Component } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rent-a-car-app';
  welcomeMessage: string[] = ['Welcome to our Car Rental App! Choose your favourite car from the list of avaliable cars:'];

  
}
