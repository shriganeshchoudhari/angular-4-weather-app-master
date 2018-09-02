import {Component, OnInit} from "@angular/core";
import {SearchResult} from "../../shared/models/search-result";
import {MyCitiesService} from "../../shared/services/my-cities.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html'
})
export class CityDetailsComponent implements OnInit {

  private _cityId: number;
  public cityDetails: SearchResult;

  constructor(private _myCitiesService: MyCitiesService, private _route: ActivatedRoute,
              private _router: Router) { }

  getCity() {
    this._route.params.subscribe(params => this._cityId = parseInt(params.cityId));
    this.cityDetails = this._myCitiesService.getCity(this._cityId);
    console.log(this.cityDetails);
    if (this.cityDetails === null) {
      this._router.navigateByUrl("/");
    }
  }

  ngOnInit() {
    this.getCity();
  }

}
