import {NgModule} from "@angular/core";
import {FindCitiesRoutingModule} from "./find-cities-routing.module";
import {FindCitiesComponent} from "./find-cities.component";
import {ResultsComponent} from "../results/results.component";
import {WeatherService} from "../../shared/services/weather.service";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {ResultsModule} from "../results/results.module";

@NgModule({
  imports: [FindCitiesRoutingModule, CommonModule, ReactiveFormsModule, ResultsModule],
  declarations: [FindCitiesComponent],
  providers: [WeatherService]
})
export class  FindCitiesModule {
}
