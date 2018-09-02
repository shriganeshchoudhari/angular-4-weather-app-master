import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {MyCitiesComponent} from "./my-cities.component";

const routes: Routes = [
  {path: "", component: MyCitiesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCitiesRoutingModule {
  // empty class
}
