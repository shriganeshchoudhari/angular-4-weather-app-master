import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {CityDetailsComponent} from "./city-details.component";

const routes: Routes = [
  {path: ":cityId", component: CityDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityDetailsRoutingModule {
  // empty class
}
