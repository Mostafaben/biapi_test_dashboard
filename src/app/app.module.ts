import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppWrapperComponent } from "./app-wrapper/app-wrapper.component";
import { UserCardComponent } from "./shared/components/user-card/user-card.component";
import { SideMenuComponent } from "./shared/components/side-menu/side-menu.component";
import { NavBarComponent } from "./shared/components/nav-bar/nav-bar.component";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    AppWrapperComponent,
    UserCardComponent,
    SideMenuComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
