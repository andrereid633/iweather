import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import  'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {

  // apiKey = 'b75f52c4862b61a7f6645ab7ebe82c49';
  apiKey = 'd9dc6c158204d54df089f460dd7e0255';
  url = '';


  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  }

  getWeather(city, code){
        // return this.http.get(this.url + city + ',' + code + '&appid=' + this.apiKey);
        return this.http.get(this.url + city + ',' + code + '&appid=' + this.apiKey);
        // return this.http.get(this.url + 'London' + ',' + 'uk' + '&appid=' + this.apiKey);
        // return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b75f52c4862b61a7f6645ab7ebe82c49');
    
    }

    

}
