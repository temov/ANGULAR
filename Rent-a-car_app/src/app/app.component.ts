import { Component } from '@angular/core';
import { Car } from './interfaces/car.interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rent-a-car-app';
  welcomeMessage: string[] = ['Welcome to our Car Rental App! Choose your favourite car from the list of avaliable cars:'];

  cars:Car[] = [
    {
      id:1,
      model: 'Audi A4',
      engineType: 'Gasoline',
      yearOfProduction: '2016',
      priceToRent: 100,
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Audi_A4_2.0_TFSI_quattro.jpg',
      isRented: false
    },
    {
      id:2,
      model: 'Bmw 3',
      engineType: 'Diesel',
      yearOfProduction: '2019',
      priceToRent: 110,
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/BMW_3_Series-F30.jpg',
      isRented: false
    },
    {
      id:3,
      model: 'VW Passat',
      engineType: 'Gasoline',
      yearOfProduction: '2020',
      priceToRent: 90,
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/VW_Passat_B8_Limousine_2.0_TDI_Highline.JPG',
      isRented: true
    }
  ] ;
}
