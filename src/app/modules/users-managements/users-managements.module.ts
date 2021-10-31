import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersManagementsRoutingModule } from "./users-managements-routing.module";
import { UsersListingsComponent } from "./components/users-listings/users-listings.component";
import { SharedModule } from "src/app/shared/modules/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [UsersListingsComponent],
  imports: [
    CommonModule,
    UsersManagementsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UsersManagementsModule {}
