import { Component, OnInit } from '@angular/core';
import {SearchResult} from "../../shared/models/search-result";
import {MyCitiesService} from "../../shared/services/my-cities.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-cities',
  templateUrl: './my-cities.component.html'
})
export class MyCitiesComponent implements OnInit {

  public citiesList: SearchResult[];

  constructor(private _myCitiesService: MyCitiesService, private _router: Router) { }

  ngOnInit() {
    this.citiesList = this._myCitiesService.myCities;
  }

  seeDetails(city: SearchResult) {
    this._router.navigateByUrl("/my-cities/details/" + city.id);
  }

}
