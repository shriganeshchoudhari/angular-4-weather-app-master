import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../shared/services/weather.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SearchResult} from "../../shared/models/search-result";

@Component({
  selector: 'app-find-cities',
  templateUrl: './find-cities.component.html'
})
export class FindCitiesComponent implements OnInit {

  public searchForm: FormGroup;
  public result: SearchResult;

  constructor(private _weatherService: WeatherService, private _formBuilder: FormBuilder) {
  }

  searchCity() {
    let city: string = this.searchForm.value.searchInput;
    this._weatherService.getweatherData(city)
      .subscribe(
        response => {
          console.log(response);
          this.result = response;
        }, error => console.log(error),
        () => {
          console.log("Executed")
        }
      )
  }

  createSearchForm() {
    this.searchForm = this._formBuilder.group({
      searchInput: ["Liberia", Validators.required]
    });
  }

  ngOnInit() {
    this.createSearchForm();
  }

}
