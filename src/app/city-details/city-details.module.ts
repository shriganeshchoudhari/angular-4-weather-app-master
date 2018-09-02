import {NgModule} from "@angular/core";
import {CityDetailsRoutingModule} from "./city-details-routing.module";
import {CityDetailsComponent} from "./city-details.component";
import {CommonModule} from "@angular/common";
import {ResultsModule} from "../results/results.module";

@NgModule({
  imports: [CityDetailsRoutingModule, CommonModule, ResultsModule],
  declarations: [CityDetailsComponent],
})
export class  CityDetailsModule {
}
