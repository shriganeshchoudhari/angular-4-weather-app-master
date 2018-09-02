import {Component, Input} from "@angular/core";
import {SearchResult} from "../../shared/models/search-result";
import {MyCitiesService} from "../../shared/services/my-cities.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  @Input() searchResult: SearchResult;

  constructor(private _myCitiesService: MyCitiesService) {
  }

  saveCity() {
    this._myCitiesService.addCity(this.searchResult);
  }

  deleteCity() {
    this._myCitiesService.removeCity(this.searchResult);
  }

  cityExists() {
    return this._myCitiesService.cityExists(this.searchResult);
  }
}
