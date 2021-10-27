import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersListingsComponent } from "./components/users-listings/users-listings.component";

const routes: Routes = [
  {
    path: "users",
    component: UsersListingsComponent
  },
  {
    path: "**",
    redirectTo: "users"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersManagementsRoutingModule {}
