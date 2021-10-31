import { HTTP_INTERCEPTORS } from "@angular/common/http";
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
import { HttpInterceptorService } from "./shared/services/http-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    AppWrapperComponent,
    SideMenuComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
