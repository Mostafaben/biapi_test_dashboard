import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppWrapperComponent } from "./app-wrapper/app-wrapper.component";

const routes: Routes = [
  {
    path: "",
    component: AppWrapperComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./modules/users-managements/users-managements.module").then(
            module => module.UsersManagementsModule
          )
      }
    ]
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./modules/authentication/authentication.module").then(
        module => module.AuthenticationModule
      )
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
