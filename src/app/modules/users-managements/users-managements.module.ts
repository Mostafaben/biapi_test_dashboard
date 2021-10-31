import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersManagementsRoutingModule } from "./users-managements-routing.module";
import { UsersListingsComponent } from "./components/users-listings/users-listings.component";
import { SharedModule } from "src/app/shared/modules/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { UsersManagementsService } from "src/app/shared/services/users-managements.service";
import { HttpInterceptorService } from "src/app/shared/services/http-interceptor.service";

@NgModule({
  declarations: [UsersListingsComponent],
  imports: [
    CommonModule,
    UsersManagementsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsersManagementsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ]
})
export class UsersManagementsModule {}
