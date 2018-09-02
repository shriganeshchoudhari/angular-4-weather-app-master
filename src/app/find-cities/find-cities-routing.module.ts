import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {FindCitiesComponent} from "./find-cities.component";

const routes: Routes = [
  {path: "", component: FindCitiesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindCitiesRoutingModule {
  // empty class
}
