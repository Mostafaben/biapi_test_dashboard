import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loading-dialog",
  template: `
    <div class="p4 flex flex-row items-center">
      <mat-spinner diameter='40'></mat-spinner>
      <span class="ml-4">Loading...</span>
    </div>
  `
})
export class LoadingDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
