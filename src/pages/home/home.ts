import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { WeatherProvider } from '../../providers/weather/weather';

 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather: any;

  name:any;

  location: {
    city: string,
    code: string
  }

  // Inject Weather provider as dependency
  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider, private storage: Storage) {
  }

  ionViewWillEnter(){
    this.storage.get('location').then((val) => {
      if(val != null){
        // get location as json object. It is stored as a string inititally
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: 'London',
          code: 'uk'
        }
      }

      this.weatherProvider.getWeather(this.location.city, this.location.code)
        .subscribe(weather => {
           //  shows what is returned form the API
           console.log(weather);
           this.weather = weather;
    
           console.log(this.weather.coord.lon);
           // console.log(this.weather.sys.id);
           this.name = this.weather.coord.lon;
           console.log(this.name);
        });
    });     
  }
}
