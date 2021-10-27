import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import MENU_ITEMS from "src/app/static/side-menu.static";

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"]
})
export class SideMenuComponent implements OnInit {
  menuItems = MENU_ITEMS;
  @Input() isMinimized: boolean = false;
  @Output() toggleSideMenu: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleMenuButtonClick() {
    this.toggleSideMenu.emit();
  }
}
