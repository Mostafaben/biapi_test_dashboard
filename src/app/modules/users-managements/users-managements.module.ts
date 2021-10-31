import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersManagementsRoutingModule } from "./users-managements-routing.module";
import { UsersListingsComponent } from "./components/users-listings/users-listings.component";
import { SharedModule } from "src/app/shared/modules/shared.module";

@NgModule({
  declarations: [UsersListingsComponent],
  imports: [CommonModule, UsersManagementsRoutingModule, SharedModule]
})
export class UsersManagementsModule {}
