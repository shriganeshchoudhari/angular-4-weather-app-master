import {Injectable} from "@angular/core";
import {SearchResult} from "../models/search-result";

@Injectable()
export class MyCitiesService {
  public myCities: SearchResult[] = [];

  addCity(city: SearchResult) {
    if (!this.cityExists(city)) {
      this.myCities.push(city);
      alert("City added correctly");
    }
  }

  cityExists(city: SearchResult): boolean {
    let exists: boolean = false;
    this.myCities.map(c => {
      if (c.name === city.name && c.sys.country === city.sys.country) {
        exists = true;
      }
    });
    return exists;
  }

  getCity(cityId: number): SearchResult {
    let city: SearchResult = null;
    this.myCities.map(c => {
      if (c.id === cityId) {
        city = c;
      }
    });
    return city;
  }

  removeCity(city: SearchResult) {
    this.myCities = this.myCities.filter(c => {
      if (c.name !== city.name && c.sys.country !== city.sys.country) {
        return c;
      }
    });
    alert("City removed correctly");
  }
}
