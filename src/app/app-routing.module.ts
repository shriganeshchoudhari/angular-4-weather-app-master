import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MyCitiesService} from "../shared/services/my-cities.service";

const appRoutes: Routes = [
  {
    path: "find-cities",
    loadChildren: "./find-cities/find-cities.module#FindCitiesModule",
  },
  {
    path: "my-cities",
    loadChildren: "./my-cities/my-cities.module#MyCitiesModule",
  },
  {
    path: "my-cities/details",
    loadChildren: "./city-details/city-details.module#CityDetailsModule",
  },
  {path: "", redirectTo: "/find-cities", pathMatch: "full"},
  {path: "**", redirectTo: "/find-cities", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [MyCitiesService]
})
export class AppRoutingModule {
}
