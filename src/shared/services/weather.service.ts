import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http} from '@angular/http';

import {API_KEY} from '../shared-data'
import {SearchResult} from "../models/search-result";

@Injectable()
export class WeatherService {

  constructor(private _http: Http) {
  }

  getweatherData(city: string): Observable<SearchResult> {
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + API_KEY + "&units=metric")
      .map(response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
        return Observable.of(null);
      });
  }
}
