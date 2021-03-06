import { Component, Input, OnInit } from "@angular/core";
import IUser from "../../interfaces/user";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"]
})
export class UserCardComponent implements OnInit {
  @Input() user: IUser | null = null;
  constructor() {}

  ngOnInit(): void {}
}
