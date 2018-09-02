import {NgModule} from "@angular/core";
import {MyCitiesRoutingModule} from "./my-cities-routing.module";
import {MyCitiesComponent} from "./my-cities.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [MyCitiesRoutingModule, CommonModule],
  declarations: [MyCitiesComponent],
})
export class  MyCitiesModule {
}
