import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersManagementsRoutingModule } from "./users-managements-routing.module";
import { UsersListingsComponent } from "./components/users-listings/users-listings.component";

@NgModule({
  declarations: [UsersListingsComponent],
  imports: [CommonModule, UsersManagementsRoutingModule]
})
export class UsersManagementsModule {}
