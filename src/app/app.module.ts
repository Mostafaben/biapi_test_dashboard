import { NgModule } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppWrapperComponent } from "./app-wrapper/app-wrapper.component";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./shared/components/nav-bar/nav-bar.component";
import { SideMenuComponent } from "./shared/components/side-menu/side-menu.component";
import { SharedModule } from "./shared/modules/shared.module";
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { LoadingDialogComponent } from "./shared/dialogs/loading-dialog/loading-dialog.component";
import { ConfirmDialogComponent } from "./shared/dialogs/confirm-dialog/confirm-dialog.component";
import { RouterModule } from "@angular/router";
@NgModule({
  declarations: [
    AppComponent,
    AppWrapperComponent,
    SideMenuComponent,
    NavBarComponent,
    LoadingDialogComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
